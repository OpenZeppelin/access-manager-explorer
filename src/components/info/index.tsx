import { InfoCircledIcon } from "@radix-ui/react-icons";
import { HoverCard, IconButton, Text } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<typeof IconButton> {}

const Info: FC<Props> = (props) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <IconButton size="1" ml="2" variant="ghost" color="gray" {...props}>
          <InfoCircledIcon />
        </IconButton>
      </HoverCard.Trigger>
      <HoverCard.Content size="1" className="w-64">
        {props.children}
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default Info;
