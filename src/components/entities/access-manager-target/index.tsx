"use client";
import {
  Box,
  Callout,
  Flex,
  Separator,
  Heading,
  Badge,
  Text,
  Code,
  Button,
  Card,
} from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import Skeleton from "./skeleton";
import {
  ArrowRightIcon,
  CircleIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity, Entity } from "@/types";
import Address from "@/components/address";
import Function from "@/components/function";
import { ACCESS_MANAGER_TARGET_QUERY } from "./request";
import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";

import { useFavorites } from "@/providers/favorites";
import Empty from "../empty";
import { useEntities } from "@/providers/entities";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  id: string;
  shortenAddress: ComponentProps<typeof Address>["addreth"]["shortenAddress"];
  isLast: boolean;
}

const AccessManagerTarget: FC<Props> = ({
  id,
  shortenAddress,
  className,
  depth,
  isLast,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_TARGET_QUERY,
    variables: {
      id,
    },
  });

  const { splice } = useEntities();

  const address = useMemo(() => id.split("/").reverse()[0], [id]);

  const accessManagerTarget = data?.accessManagerTarget;

  const favorites = useFavorites();

  const entities = useEntities();

  return (
    <Account
      id={id}
      favorites={{
        toggle: () => {
          if (
            !favorites.isFavorite(AddressEntity.AccessManagerTarget, address)
          ) {
            favorites.setFavorite([
              AddressEntity.AccessManagerTarget,
              {
                [address]: id,
              },
            ]);
          } else {
            favorites.removeFavorite(
              AddressEntity.AccessManagerTarget,
              address
            );
          }
        },
        isFavorite: favorites.isFavorite(
          AddressEntity.AccessManagerTarget,
          address
        ),
      }}
      remove={() => splice(depth, 1)}
      entityType={AddressEntity.AccessManagerTarget}
      description="An address targetted by an AccessManager"
      address={address as AddressType}
      className={className}
      shortenAddress={shortenAddress}
      isLast={isLast}
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
        ) : accessManagerTarget ? (
          <Flex direction="column">
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">Targetted by</Heading>
              {accessManagerTarget?.manager.asAccount.id && (
                <Address
                  addreth={{
                    shortenAddress: 10,
                    address: accessManagerTarget.manager.asAccount.id,
                  }}
                  onDetail={{
                    entity: {
                      type: AddressEntity.AccessManager,
                      id: accessManagerTarget.manager.asAccount.id,
                    },
                    at: depth,
                  }}
                />
              )}
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">
                Admin delay
                <Info ml="3" mt="1">
                  <Text size="1">
                    AccessManager admins can schedule delayed admin actions.
                    This is the time it takes to execute one of these actions
                    after a previous <Code>schedule</Code> call, namely{" "}
                    <Code>updateAuthority</Code>, <Code>setTargetClosed</Code>{" "}
                    and <Code>setTargetFunctionRole</Code>.
                  </Text>
                </Info>
              </Heading>
              {accessManagerTarget?.adminDelay && (
                <DelayedValue
                  size="2"
                  value={accessManagerTarget?.adminDelay}
                />
              )}
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Flex>
                <Heading size="2">Status</Heading>
                <Info ml="3" mt="1">
                  <Text size="1">
                    A target can be closed, which means that every{" "}
                    <Code>canCall</Code> invokation will return false. If this
                    contract{"'"}s authority is the access manager targetting
                    it, every call will revert.
                  </Text>
                </Info>
              </Flex>
              {accessManagerTarget?.closed ? (
                <Badge color="red">Closed</Badge>
              ) : (
                <Badge color="green">Open</Badge>
              )}
            </Flex>
            {accessManagerTarget?.asAccount.asAccessManaged?.id && (
              <Button
                variant="surface"
                size="1"
                mt="4"
                color="gray"
                onClick={() =>
                  entities.push(
                    {
                      type: AddressEntity.AccessManaged,
                      id: accessManagerTarget?.asAccount.asAccessManaged?.id,
                    },
                    depth
                  )
                }
              >
                See as AccessManaged <ArrowRightIcon />
              </Button>
            )}
            <Heading size="3" mt="4" mb="2">
              Managed functions
            </Heading>
            {(accessManagerTarget?.functions.length ?? 0) > 0 ? (
              <Flex direction="column">
                {accessManagerTarget?.functions.map((method: any) => (
                  <Function
                    key={method.id}
                    my="1"
                    size="4"
                    method={method}
                    icons={{
                      onDetail: {
                        entity: {
                          type: Entity.AccessManagerTargetFunction,
                          id: method.id,
                        },
                        at: depth,
                      },
                    }}
                  />
                ))}
              </Flex>
            ) : (
              <Callout.Root>
                <Callout.Icon>
                  <CircleIcon />
                </Callout.Icon>
                <Callout.Text>No managed functions</Callout.Text>
              </Callout.Root>
            )}
          </Flex>
        ) : (
          <Empty
            callout={{
              text: (clientChain) =>
                `Manager Target contract not found for ${clientChain.name} (${clientChain.id}).`,
            }}
          />
        )}
      </Box>
    </Account>
  );
};

export default AccessManagerTarget;
