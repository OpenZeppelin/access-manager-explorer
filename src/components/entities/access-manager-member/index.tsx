"use client";
import {
  Box,
  Card,
  Callout,
  Table,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import { ACCESS_MANAGER_MEMBER_QUERY } from "./requests";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity, EntityPrefix } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Address from "@/components/address";
import Role from "@/components/role";
import DelayedValue from "@/components/delayed-value";
import { useFormatter, useNow } from "next-intl";
import Skeleton from "./skeleton";
import ROUTES from "@/config/routes";

interface Props extends ComponentProps<typeof Card> {
  id: string;
  depth: number;
  truncate: ComponentProps<typeof Address>["truncate"];
}

const AccessManagerMember: FC<Props> = ({
  id,
  className,
  depth,
  truncate,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_MEMBER_QUERY,
    variables: {
      id,
    },
  });

  const remove = useRemoveEntity(depth);

  const format = useFormatter();
  const now = useNow();

  const address = useMemo(() => id.split("/").reverse()[0], [id]);

  return (
    <Account
      entityType={AddressEntity.AccessManagerRoleMember}
      description="A member represents the access level an address has under an AccessManager."
      address={address as AddressType}
      remove={remove}
      className={className}
      truncate={truncate}
      {...props}
    >
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
        <Flex direction="column">
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Manager</Heading>
            <Address
              truncate={{
                leading: 10,
                trailing: 10,
              }}
              icons={{
                etherscan: true,
                copy: true,
                navigate: {
                  id: ROUTES.EXPLORER.DETAILS(
                    EntityPrefix.AccessManager,
                    data.accessManagerRoleMember.manager.asAccount.id
                  ),
                },
              }}
              address={{
                value: data.accessManagerRoleMember.manager.asAccount.id,
              }}
            />
          </Flex>
          <Separator size="4" my="3" />
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Role</Heading>
            <Role
              size="2"
              role={data.accessManagerRoleMember.role}
              icons={{ navigate: true }}
            />
          </Flex>
          <Separator size="4" my="3" />
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Execution delay</Heading>
            <DelayedValue {...data.accessManagerRoleMember.executionDelay} />
          </Flex>
          <Separator size="4" my="3" />
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Member since</Heading>
            <Text size="1">
              {format.relativeTime(
                data.accessManagerRoleMember.since * 1000,
                now
              )}
            </Text>
          </Flex>
        </Flex>
      )}
    </Account>
  );
};

export default AccessManagerMember;
