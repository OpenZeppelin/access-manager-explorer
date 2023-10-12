"use client";
import { Badge, Box, Card, Table, Tabs, Text } from "@radix-ui/themes";
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

interface Props extends ComponentProps<typeof Card> {
  address: AddressType;
}

const AccessManager: FC<Props> = ({ address, ...props }) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_QUERY,
    variables: {
      id: address,
    },
  });

  return (
    <Card {...props}>
      <Address
        address={{
          value: address,
          weight: "medium",
          size: "4",
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
      {fetching && <Skeleton />}
      {data && (
        <Tabs.Root mt="4" defaultValue="targets">
          <Tabs.List>
            <Tabs.Trigger value="targets">Targets</Tabs.Trigger>
            <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
            <Tabs.Trigger value="members">Members</Tabs.Trigger>
            <Tabs.Trigger value="functions">Functions</Tabs.Trigger>
            <Tabs.Trigger value="operations">Operations</Tabs.Trigger>
            <Tabs.Trigger value="managed">Managed</Tabs.Trigger>
          </Tabs.List>
          <Box pt="3" pb="2">
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
