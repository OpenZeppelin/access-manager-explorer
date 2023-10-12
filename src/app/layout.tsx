import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { title, description } from "@/config/site";
import { WagmiConfig } from "wagmi";
import { cn } from "@/utils";
import { config, chains } from "@/config/wallet";
import { FC, ReactNode } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Theme, Urql } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://contracts.openzeppelin.com"),
  title,
  description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  // TODO
  // openGraph: {
  //   images: "/banner.png",
  // },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@openzeppelin",
    images: [
      /* "/banner.png" */
    ],
  },
};

type Props = { children: ReactNode };

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains} showRecentTransactions={true}>
            <Urql>
              <Theme>{children}</Theme>
            </Urql>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
};

export default RootLayout;
