import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { title, description } from "@/config/site";
import { WagmiConfig } from "wagmi";
import { cn } from "@/utils";
import { config } from "@/config/wallet";
import { FC, ReactNode } from "react";
import { RainbowKit, Theme, Urql } from "@/components/providers";
import { NextIntlClientProvider } from "next-intl";
import { FavoritesProvider } from "@/providers/favorites";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
      <body className={cn(inter.className)}>
        <main>
          <WagmiConfig config={config}>
            <Theme>
              <Urql>
                <RainbowKit>
                  <NextIntlClientProvider locale="en" messages={{}}>
                    <FavoritesProvider>{children}</FavoritesProvider>
                  </NextIntlClientProvider>
                </RainbowKit>
              </Urql>
            </Theme>
          </WagmiConfig>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
