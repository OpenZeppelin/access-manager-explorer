import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { title, description } from "@/config/site";
import { WagmiConfig } from "wagmi";
import { cn } from "@/utils";
import { config } from "@/config/wallet";
import { FC, ReactNode } from "react";
import { Theme } from "@/components/providers";
import LocalFont from "next/font/local";

const silka = LocalFont({
  src: [
    {
      path: "./fonts/silka-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/silka-medium-webfont.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/silka-semibold-webfont.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "block",
  fallback: ["Inter", "Helvetica Neue", "Helvetica", "sans-serif", "system-ui"],
  variable: "--font-silka",
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
      <body 
      className={cn(silka.variable)} 
      suppressHydrationWarning>
        <main>
          <WagmiConfig config={config}>
            <Theme>{children}</Theme>
          </WagmiConfig>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
