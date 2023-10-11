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
import { useAccount } from "wagmi";
import { cn } from "@/utils";
import { zeroAddress } from "viem";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <Flex height="auto" className="border-r w-64" p="4">
      <Collapsible.Root defaultOpen={true} open={open} onOpenChange={setOpen}>
        <div className="flex items-center cursor-pointer">
          {isConnected && (
            <Collapsible.Trigger>
              <Button ml="1" size="2" variant="ghost" color="gray">
                <Heading size="2">My wallet</Heading>
                {!open ? <ChevronRightIcon /> : <ChevronDownIcon />}
              </Button>
            </Collapsible.Trigger>
          )}
          {!isConnected && (
            <Button
              ml="1"
              size="2"
              variant="ghost"
              color="gray"
              onClick={openConnectModal}
            >
              <Heading size="2">Connect wallet</Heading>
              <PlusIcon />
            </Button>
          )}
        </div>
        <Collapsible.Content className="pt-2">
          <Address
            address={address ?? zeroAddress}
            truncate
            avatar={{ size: "1" }}
            className={cn(
              {
                hidden: !address,
              },
              "p-1"
            )}
          />
        </Collapsible.Content>
      </Collapsible.Root>
    </Flex>
  );
};

export default Sidebar;
