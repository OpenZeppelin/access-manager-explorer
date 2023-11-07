import { ComponentProps, FC } from "react";
import { Box, Card } from "@radix-ui/themes";
import { cn } from "@/utils";
import Content from "./content";

interface Props extends ComponentProps<typeof Card> {}

const Sidebar: FC<Props> = ({ style, ...props }) => {
  return (
    <Box style={style}>
      <Card
        className={cn(
          "no-radius flex border-r hidden lg:block h-full w-80",
          props.className
        )}
        size="2"
        style={{
          border: 0,
        }}
        {...props}
      >
        <Content />
      </Card>
    </Box>
  );
};

export default Sidebar;
