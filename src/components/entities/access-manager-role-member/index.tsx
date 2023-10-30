"use client";
import {
  Card,
  Callout,
  Flex,
  Heading,
  Separator,
  Text,
  Code,
} from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import { ACCESS_MANAGER_MEMBER_QUERY } from "./requests";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity } from "@/types";
import Address from "@/components/address";
import Role from "@/components/role";
import DelayedValue from "@/components/delayed-value";
import { useFormatter, useNow } from "next-intl";
import Skeleton from "./skeleton";
import Info from "@/components/info";
import { useFavorites } from "@/providers/favorites";
import Empty from "../empty";
import { useEntities } from "@/providers/entities";

interface Props extends ComponentProps<typeof Card> {
  id: string;
  depth: number;
  shortenAddress: ComponentProps<typeof Address>["addreth"]["shortenAddress"];
  isLast: boolean;
}

const AccessManagerMember: FC<Props> = ({
  id,
  className,
  depth,
  shortenAddress,
  isLast,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_MEMBER_QUERY,
    variables: {
      id,
    },
  });

  const { remove } = useEntities();

  const format = useFormatter();
  const now = useNow();

  const address = useMemo(() => id.split("/").reverse()[0], [id]);
  const accessManagerRoleMember = data?.accessManagerRoleMember;

  const favorites = useFavorites();

  return (
    <Account
      id={id}
      favorites={{
        toggle: () => {
          if (
            !favorites.isFavorite(
              AddressEntity.AccessManagerRoleMember,
              address
            )
          ) {
            favorites.setFavorite([
              AddressEntity.AccessManagerRoleMember,
              {
                [address]: id,
              },
            ]);
          } else {
            favorites.removeFavorite(
              AddressEntity.AccessManagerRoleMember,
              address
            );
          }
        },
        isFavorite: favorites.isFavorite(
          AddressEntity.AccessManagerRoleMember,
          address
        ),
      }}
      entityType={AddressEntity.AccessManagerRoleMember}
      description="A member represents the access level an address has under an AccessManager."
      address={address as AddressType}
      remove={() => remove(depth)}
      className={className}
      shortenAddress={shortenAddress}
      isLast={isLast}
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
      ) : accessManagerRoleMember ? (
        <Flex direction="column">
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Manager</Heading>
            <Address
              addreth={{
                shortenAddress: 10,
                address: accessManagerRoleMember?.manager.asAccount.id,
              }}
              onDetail={{
                type: AddressEntity.AccessManager,
                id: accessManagerRoleMember?.manager.asAccount.id,
              }}
            />
          </Flex>
          <Separator size="4" my="3" />
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Role</Heading>
            {accessManagerRoleMember?.role && (
              <Role
                size="2"
                accessManagerRole={accessManagerRoleMember?.role}
                icons={{ navigate: true }}
              />
            )}
          </Flex>
          <Separator size="4" my="3" />
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">
              Execution delay
              <Info ml="3" mt="1">
                <Text size="1">
                  Roles are assigned to users along with an execution delay,
                  which is the amount of time the user needs to call{" "}
                  <Code>schedule</Code> in advance of calling{" "}
                  <Code>execute</Code> for any allowed operation to its role.
                </Text>
              </Info>
            </Heading>
            {accessManagerRoleMember?.executionDelay && (
              <DelayedValue
                size="2"
                value={accessManagerRoleMember?.executionDelay}
              />
            )}
          </Flex>
          <Separator size="4" my="3" />
          <Flex align="center" width="100%" justify="between">
            <Heading size="2">Member since</Heading>
            <Flex align="center">
              <Text size="2">
                {format.relativeTime(
                  accessManagerRoleMember?.since * 1000,
                  now.getTime()
                )}
              </Text>
              {accessManagerRoleMember?.since * 1000 > now.getTime() && (
                <Info ml="3" mt="1">
                  <Text size="1">
                    A date in the future means this role is already granted but
                    not in effect yet.
                  </Text>
                </Info>
              )}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Empty
          callout={{
            text: (clientChain) =>
              `Role Member contract not found for ${clientChain.name} (${clientChain.id}).`,
          }}
        />
      )}
    </Account>
  );
};

export default AccessManagerMember;
