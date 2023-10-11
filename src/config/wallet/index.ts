"use client";
import { configureChains, createConfig } from "wagmi";
import { goerli } from "viem/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { title } from "../site";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: title,
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { config, chains };
