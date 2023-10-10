import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://contracts.openzeppelin.com"),
  title: site.title,
  description: site.description,
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
    title: site.title,
    description: site.description,
    creator: "@openzeppelin",
    images: [
      /* "/banner.png" */
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
