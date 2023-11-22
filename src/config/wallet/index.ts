"use client";
import { configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { title } from "../site";
import { chains as supportedChains } from "../chains";
import { walletConnectcId } from "../env";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  supportedChains.map((chain) => chain.definition),
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: title,
  projectId: walletConnectcId!,
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { config, publicClient, chains };
