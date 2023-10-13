"use client";
import {
  Badge,
  Box,
  Card,
  Flex,
  Callout,
  Tabs,
  ScrollArea,
  Inset,
} from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Address from "../address";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import { ACCESS_MANAGER_QUERY } from "./requests";
import Targets from "./tabs/targets";
import Roles from "./tabs/roles";
import Members from "./tabs/members";
import Functions from "./tabs/functions";
import Operations from "./tabs/operations";
import Managed from "./tabs/managed";
import Skeleton from "./skeleton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils";

interface Props extends ComponentProps<typeof Card> {
  address: AddressType;
}

const AccessManager: FC<Props> = ({ address, className, ...props }) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_QUERY,
    variables: {
      id: address,
    },
  });

  return (
    <Card
      {...props}
      className={cn("max-h-full card-inner-overflow-y-scroll", className)}
    >
      <Flex align="center" mb="4">
        <Address
          address={{
            value: address,
            weight: "medium",
            size: "5",
          }}
          avatar={{
            size: "2",
          }}
          truncate={{
            leading: 8,
            trailing: 8,
          }}
          links={{
            etherscan: true,
          }}
        />
        <Badge>Access Manager</Badge>
      </Flex>
      {error ? (
        <Callout.Root color="red" role="alert">
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>
            Ahh snap! Something went wrong while fetching the Access Manager.
            {error.message}
          </Callout.Text>
        </Callout.Root>
      ) : fetching ? (
        <>
          <Skeleton mt="6" className="w-full h-9"/>
          <Skeleton className="w-full h-1" my="3"/>
          <Skeleton className="w-full h-5" my="3"/>
          <Skeleton className="w-full h-5" my="3"/>
          <Skeleton className="w-full h-5" my="3"/>
          <Skeleton className="w-full h-5" my="3"/>
        </>
      ) : (
        <Tabs.Root mt="4" defaultValue="targets">
          <Tabs.List>
            <Tabs.Trigger value="targets">Targets</Tabs.Trigger>
            <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
            <Tabs.Trigger value="members">Members</Tabs.Trigger>
            <Tabs.Trigger value="functions">Functions</Tabs.Trigger>
            <Tabs.Trigger value="operations">Operations</Tabs.Trigger>
            <Tabs.Trigger value="managed">Managed</Tabs.Trigger>
          </Tabs.List>
          <Box pt="4" pb="2">
            <Tabs.Content value="targets">
              <Targets data={data} />
            </Tabs.Content>
            <Tabs.Content value="roles">
              <Roles />
            </Tabs.Content>
            <Tabs.Content value="members">
              <Members />
            </Tabs.Content>
            <Tabs.Content value="functions">
              <Functions />
            </Tabs.Content>
            <Tabs.Content value="operations">
              <Operations />
            </Tabs.Content>
            <Tabs.Content value="managed">
              <Managed />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      )}
    </Card>
  );
};

export default AccessManager;
