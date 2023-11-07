import { ComponentProps, FC } from "react";
import { Box } from "@radix-ui/themes";
import { cn } from "@/utils";

const Header: FC<ComponentProps<typeof Box>> = ({ className, ...props }) => (
  <Box
    className={cn(
      "flex flex-col text-center sm:text-left",
      className
    )}
    {...props}
  />
);

Header.displayName = "Header";

export default Header;
