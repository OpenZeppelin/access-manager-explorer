import Address from "@/components/address";
import ROUTES from "@/config/routes";
import { Entry, Favorites, Kind } from "@/providers/favorites/provider";
import { EntityPrefix } from "@/types";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Flex, Heading } from "@radix-ui/themes";
import { ReactNode, useState } from "react";
import { Address as AddressType } from "viem";

interface Props<T extends Kind> {
  name: string;
  data: Entry<Favorites[T]>[];
  onRender: (entry: Entry<Favorites[T]>) => ReactNode;
}

const FavoritesSection = <T extends Kind>({
  name,
  data,
  onRender,
}: Props<T>) => {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible.Root
      className="w-full"
      defaultOpen={true}
      open={open}
      onOpenChange={setOpen}
    >
      <Flex align="center" mb="1" mt="4">
        <Collapsible.Trigger>
          <Flex width="100%">
            <Heading size="2" mr="2">
              {name}
            </Heading>
            {!open ? (
              <ChevronRightIcon width="16" height="16" />
            ) : (
              <ChevronDownIcon width="16" height="16" />
            )}
          </Flex>
        </Collapsible.Trigger>
      </Flex>
      <Collapsible.Content className="pt-2">
        {data.map(onRender)}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default FavoritesSection;
