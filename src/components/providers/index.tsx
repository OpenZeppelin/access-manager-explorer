"use client";
import { Theme as Themes } from "@radix-ui/themes";
import { FC, ReactNode, useMemo } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Provider } from "urql";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chains } from "@/config/wallet";
import { chains as suportedChains } from "@/config/chains";
import { getUrqlClient } from "@/config/urql";
import { redirect } from "next/navigation";
import ROUTES from "@/config/routes";
import { useRouteNetwork } from "@/providers/route-network";

interface Props {
  children: ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <Themes accentColor="blue">{children}</Themes>
    </ThemeProvider>
  );
};

const Urql: FC<Props> = ({ children }) => {
  const { currentChainId } = useRouteNetwork();

  const client = useMemo(() => {
    const supportedChain = suportedChains.find(
      ({ definition }) => definition.id == currentChainId
    );
    if (!supportedChain) return redirect(ROUTES.EXPLORER.ROOT(1));
    return getUrqlClient(supportedChain);
  }, [currentChainId]);

  return <Provider value={client}>{children}</Provider>;
};

const RainbowKit: FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <RainbowKitProvider
      theme={theme == "light" ? undefined : darkTheme()}
      chains={chains}
      showRecentTransactions={true}
    >
      {children}
    </RainbowKitProvider>
  );
};

export { Theme, Urql, RainbowKit };
