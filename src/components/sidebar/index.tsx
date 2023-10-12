"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import Address from "@/components/address";
import { Button, Flex, Heading } from "@radix-ui/themes";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useAccount from "@/hooks/use-account";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <Flex height="auto" className="border-r w-64" p="4">
      <Collapsible.Root
        className="w-full"
        defaultOpen={true}
        open={open && isConnected}
        onOpenChange={setOpen}
      >
        <Flex align="center" className="cursor-pointer" mb="1">
          {isConnected && (
            <Button ml="1" size="2" variant="ghost" color="gray">
              <Collapsible.Trigger asChild>
                <Flex>
                  <Heading size="2" mr="2">
                    My wallet
                  </Heading>
                  {!open ? (
                    <ChevronRightIcon width="16" height="16" />
                  ) : (
                    <ChevronDownIcon width="16" height="16" />
                  )}
                </Flex>
              </Collapsible.Trigger>
            </Button>
          )}
          {!isConnected && (
            <Button
              ml="1"
              size="2"
              variant="ghost"
              color="gray"
              onClick={openConnectModal}
            >
              <Heading size="2" mr="2">
                Add wallet
              </Heading>
              <PlusIcon width="16" height="16" />
            </Button>
          )}
        </Flex>
        <Collapsible.Content className="pt-2">
          <Button variant="ghost" color="gray" className="w-full">
            {address && (
              <Address
                address={{
                  value: address,
                }}
                truncate
                className={cn("p-1", "ml-4")}
              />
            )}
          </Button>
        </Collapsible.Content>
      </Collapsible.Root>
    </Flex>
  );
};

export default Sidebar;
