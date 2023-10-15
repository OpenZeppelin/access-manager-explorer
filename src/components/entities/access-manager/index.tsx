"use client";
import { Box, Card, Callout, Tabs } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import { ACCESS_MANAGER_QUERY } from "./requests";
import Members from "./tabs/members";
// import Operations from "./tabs/operations";
import Skeleton from "./skeleton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Targets from "./tabs/targets";
import Roles from "./tabs/roles";
import Account from "../as/account";
import { AddressEntity } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Address from "@/components/address";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  address: AddressType;
  truncate: ComponentProps<typeof Address>["truncate"];
}

const AccessManager: FC<Props> = ({
  address,
  truncate,
  className,
  depth,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_QUERY,
    variables: {
      id: address,
    },
  });

  const remove = useRemoveEntity(depth);

  const accessManager = data?.accessManager;

  return (
    <Account
      remove={remove}
      entityType={AddressEntity.AccessManager}
      description="An AccessManager is a contract that keeps the permissions of a system"
      address={address}
      className={className}
      truncate={truncate}
      {...props}
    >
      <Box>
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
            <Tabs.Root defaultValue="targets">
              <Tabs.List>
                <Tabs.Trigger value="targets">Targets</Tabs.Trigger>
                <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
                <Tabs.Trigger value="members">Members</Tabs.Trigger>
                {/* <Tabs.Trigger value="operations">Operations</Tabs.Trigger> */}
              </Tabs.List>
              <Box pt="4" pb="2">
                <Tabs.Content value="targets">
                  <Targets targets={accessManager?.targets ?? []} />
                </Tabs.Content>
                <Tabs.Content value="roles">
                  <Roles roles={accessManager?.roles ?? []} />
                </Tabs.Content>
                <Tabs.Content value="members">
                  <Members members={accessManager?.members ?? []} />
                </Tabs.Content>
                {/* <Tabs.Content value="operations">
                  <Operations operations={accessManager?.operations} />
                </Tabs.Content> */}
              </Box>
            </Tabs.Root>
          </>
        )}
      </Box>
    </Account>
  );
};

export default AccessManager;
