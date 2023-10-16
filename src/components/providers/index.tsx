"use client";
import { Theme as Themes } from "@radix-ui/themes";
import { FC, ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Provider } from "urql";
import { client } from "@/config/urql";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chains } from "@/config/wallet";

interface Props {
  children: ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <Themes scaling="110%" accentColor="blue">{children}</Themes>
    </ThemeProvider>
  );
};

const Urql: FC<Props> = ({ children }) => {
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
