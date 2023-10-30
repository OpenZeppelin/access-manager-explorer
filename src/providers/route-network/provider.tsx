"use client";
import {
  createContext,
  ReactNode,
  FC,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { SupportedChainDefinition, SupportedChainId } from "@/types";
import { useNetwork } from "wagmi";
import { WatchNetworkCallback, watchNetwork } from "wagmi/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { chains } from "@/config/chains";
import { Chain } from "viem/chains";

interface Props {
  children: ReactNode;
  routeChainId: SupportedChainId;
}

interface Context {
  routeChain: SupportedChainDefinition;
  clientChain?: Chain;
  currentChain: SupportedChainDefinition;
}

const defaultContext: Context = {
  routeChain: chains[0].definition,
  currentChain: chains[0].definition,
};

const routeNetworkContext = createContext<Context>(defaultContext);

const RouteNetworkProvider: FC<Props> = ({
  children,
  routeChainId: routeChainIdString,
}) => {
  const routeChainId = Number(routeChainIdString) as SupportedChainId;
  const { chain: clientChain } = useNetwork();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const routeChain = useMemo(
    () =>
      chains.find(({ definition }) => definition.id == routeChainId)!
        .definition,
    [routeChainId]
  );

  const watchNetworkCallback: WatchNetworkCallback = useCallback(
    ({ chain }) => {
      const [_, network, chainId, ...items] = pathname.split("/");
      replace(
        `${[_, network, chain?.id.toString() ?? chainId, ...items].join(
          "/"
        )}?${searchParams}`
      );
    },
    [pathname, replace]
  );

  useEffect(() => watchNetwork(watchNetworkCallback), [watchNetworkCallback]);

  return (
    <routeNetworkContext.Provider
      value={{
        routeChain,
        clientChain,
        currentChain: routeChain ?? clientChain,
      }}
    >
      {children}
    </routeNetworkContext.Provider>
  );
};

export { routeNetworkContext };
export default RouteNetworkProvider;
