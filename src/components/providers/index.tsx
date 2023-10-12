"use client";
import { Theme as Themes } from "@radix-ui/themes";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "urql";
import { client } from "@/config/urql";

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
  return <Provider value={client}>{children}</Provider>;
};

export { Theme, Urql };
