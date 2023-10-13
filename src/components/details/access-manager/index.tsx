"use client";
import {
  Badge,
  Box,
  Card,
  Flex,
  Callout,
  Tabs,
  Text,
  Separator,
  Heading,
  IconButton,
} from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Address from "@/components/address";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import { ACCOUNT_QUERY } from "./requests";
import Targets from "./tabs/targets";
import Roles from "./tabs/roles";
import Members from "./tabs/members";
import Functions from "./tabs/functions";
import Operations from "./tabs/operations";
import Managed from "./tabs/managed";
import Skeleton from "./skeleton";
import { Cross2Icon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils";
import Interactions from "./tabs/interactions";
import { useRouter } from "next/navigation";

interface Props extends ComponentProps<typeof Card> {
  address: AddressType;
}

const AccessManager: FC<Props> = ({ address, className, ...props }) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCOUNT_QUERY,
    variables: {
      id: address,
    },
  });

  const { back } = useRouter();

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
            size: "6",
          }}
          avatar={{
            size: "2",
          }}
          truncate={{
            leading: 10,
            trailing: 10,
          }}
          icons={{
            etherscan: true,
            copy: true,
          }}
        />
        <Badge size="2">Access Manager</Badge>
        <IconButton onClick={back} ml="4" color="gray" size="3" variant="ghost">
          <Cross2Icon />
        </IconButton>
      </Flex>
      <Text size="3">
        An AccessManager is a contract that keeps the permissions of a system.
      </Text>
      <Separator orientation="horizontal" my="3" size="4" />
      <Box p="3">
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
          <Skeleton />
        ) : (
          <>
            <Heading size="3" mb="2">
              Targets
            </Heading>
            <Targets data={data} />
            <Heading size="3" mt="4" mb="2">
              Roles
            </Heading>
            <Roles data={data} />
            <Heading size="3" mt="4" mb="2">
              Members
            </Heading>
            <Members data={data} />
            <Tabs.Root mt="4" defaultValue="events">
              <Tabs.List>
                <Tabs.Trigger value="events">Recent interactions</Tabs.Trigger>
                <Tabs.Trigger value="functions">Functions</Tabs.Trigger>
                <Tabs.Trigger value="operations">Operations</Tabs.Trigger>
                <Tabs.Trigger value="managed">Managed Contracts</Tabs.Trigger>
              </Tabs.List>
              <Box pt="4" pb="2">
                <Tabs.Content value="events">
                  <Interactions data={data} />
                </Tabs.Content>
                <Tabs.Content value="functions">
                  <Functions data={data} />
                </Tabs.Content>
                <Tabs.Content value="operations">
                  <Operations data={data} />
                </Tabs.Content>
                <Tabs.Content value="managed">
                  <Managed data={data} />
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </>
        )}
      </Box>
    </Card>
  );
};

export default AccessManager;
