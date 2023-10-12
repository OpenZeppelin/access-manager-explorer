"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<typeof IconButton> {}

const ThemeIcon: FC<Props> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      {...props}
    >
      {theme == "light" ? <MoonIcon /> : <SunIcon />}
      <span className="sr-only">Twitter</span>
    </IconButton>
  );
};

export default ThemeIcon;
