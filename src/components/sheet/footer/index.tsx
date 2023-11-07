import { ComponentProps, FC } from "react";
import { Box } from "@radix-ui/themes";
import { cn } from "@/utils";

const Footer: FC<ComponentProps<typeof Box>> = ({ className, ...props }) => (
  <Box
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

Footer.displayName = "Footer";

export default Footer;
