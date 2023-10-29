"use client";
import { createContext, ReactNode, FC, useEffect } from "react";
import { SupportedChainId } from "@/types";
import { useNetwork } from "wagmi";
import { switchNetwork, watchNetwork } from "wagmi/actions";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  routeChainId: SupportedChainId;
}

interface Context {
  routeChainId: SupportedChainId;
  clientChainId?: number;
  currentChainId: SupportedChainId;
}

const defaultContext: Context = {
  routeChainId: 1,
  currentChainId: 1,
};

const routeNetworkContext = createContext<Context>(defaultContext);

const RouteNetworkProvider: FC<Props> = ({
  children,
  routeChainId: routeChainIdString,
}) => {
  const routeChainId = Number(routeChainIdString) as SupportedChainId;
  const { chain } = useNetwork();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    watchNetwork(({ chain }) => {
      const [_, network, chainId, ...items] = pathname.split("/");
      replace(
        [_, network, chain?.id.toString() ?? chainId, ...items].join("/")
      );
    });
  }, [pathname, replace]);

  const clientChainId = chain?.id;

  return (
    <routeNetworkContext.Provider
      value={{
        routeChainId,
        clientChainId: clientChainId,
        currentChainId: routeChainId ?? clientChainId,
      }}
    >
      {children}
    </routeNetworkContext.Provider>
  );
};

export { routeNetworkContext };
export default RouteNetworkProvider;
