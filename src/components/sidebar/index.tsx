"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ComponentProps, FC, useState } from "react";
import Address from "@/components/address";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useAccount from "@/hooks/use-account";
import { useRouter } from "next/navigation";
import { join } from "path";
import ROUTES from "@/config/routes";
import { EntityPrefix } from "@/types";
import { useQuery } from "urql";
import { ACCESS_MANAGER_MEMBER_QUERY } from "./requests";
import Role from "../role";
import Link from "next/link";

interface Props extends ComponentProps<typeof Card> {}

const Sidebar: FC<Props> = (props) => {
  const [open, setOpen] = useState(true);
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { replace } = useRouter();

  const [{ data, fetching }] = useQuery({
    query: ACCESS_MANAGER_MEMBER_QUERY,
    variables: {
      address: address,
    },
    pause: !address,
  });

  return (
    <Card
      className={cn("no-radius flex border-r w-80", props.className)}
      size="2"
      style={{
        border: 0,
        ...props.style,
      }}
      {...props}
    >
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
                  {address && (
                    <Address
                      address={{
                        value: address,
                        weight: "medium",
                      }}
                      truncate={{
                        leading: 4,
                        trailing: 8,
                      }}
                    />
                  )}
                  {fetching ? (
                    <div
                      className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent text-gray-600 rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : !open ? (
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
          {(data?.accessManagerRoleMembers ?? []).length == 0 ? (
            <Text ml="4" size="2" color="gray">
              No membership found
            </Text>
          ) : (
            <Heading size="1" ml="4" mb="1">
              Member of
            </Heading>
          )}
          {data?.accessManagerRoleMembers?.map((membership: any) => (
            <Button
              key={membership.id}
              my="1"
              variant="ghost"
              color="gray"
              className="w-full"
              asChild
            >
              <Link
                scroll={false}
                href={join(
                  ROUTES.EXPLORER.ROOT,
                  ROUTES.EXPLORER.DETAILS(
                    EntityPrefix.AccessManagerRoleMember,
                    membership.id
                  )
                )}
                replace
              >
                <Role
                  ml="3"
                  role={{
                    id: membership.id,
                    asRole: membership.role.label
                      ? { id: membership.role.label }
                      : membership.role.asRole,
                  }}
                />
                <Address
                  address={{
                    value: membership.manager.asAccount.id,
                  }}
                  truncate={{
                    leading: 4,
                    trailing: 6,
                  }}
                  p="1"
                  mr="auto"
                />
              </Link>
            </Button>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </Card>
  );
};

export default Sidebar;
