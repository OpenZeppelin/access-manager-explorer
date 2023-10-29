"use client";
import {
  Box,
  Card,
  Callout,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { useQuery } from "urql";
import { ACCESS_MANAGER_TARGET_FUNCTION_QUERY } from "./requests";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { AddressEntity, Entity } from "@/types";
import Skeleton from "./skeleton";
import Function from "../as/function";
import Address from "@/components/address";
import Role from "@/components/role";
import Info from "@/components/info";
import { useFavorites } from "@/providers/favorites";
import { makeFragmentData } from "@/gql";
import { ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT } from "@/components/function/requests";
import Empty from "./empty";
import { useEntities } from "@/providers/entities";

interface Props extends ComponentProps<typeof Card> {
  id: string;
  depth: number;
  isLast: boolean;
}

const AccessManagerTargetFunction: FC<Props> = ({
  id,
  className,
  depth,
  isLast,
  ...props
}) => {
  const favorites = useFavorites();
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_TARGET_FUNCTION_QUERY,
    variables: {
      id,
    },
  });

  const { remove } = useEntities();

  const selector = useMemo(() => id.split("/").reverse()[0], [id]);

  const accessManagedTargetFunction = data?.accessManagerTargetFunction;
  const method =
    accessManagedTargetFunction ??
    makeFragmentData(
      {
        id: selector,
        asSelector: {
          id: selector,
        },
      },
      ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT
    );

  return (
    <Function
      id={id}
      favorites={{
        toggle: () => {
          if (
            !favorites.isFavorite(Entity.AccessManagerTargetFunction, selector)
          ) {
            favorites.setFavorite([
              Entity.AccessManagerTargetFunction,
              {
                [selector]: id,
              },
            ]);
          } else {
            favorites.removeFavorite(
              Entity.AccessManagerTargetFunction,
              selector
            );
          }
        },
        isFavorite: favorites.isFavorite(
          Entity.AccessManagerTargetFunction,
          selector
        ),
      }}
      remove={() => remove(depth)}
      entityType={Entity.AccessManagerTargetFunction}
      description="A permissioned function defined by an AccessManager"
      method={method}
      className={className}
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
        ) : accessManagedTargetFunction ? (
          <Flex direction="column">
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">Manager</Heading>
              {accessManagedTargetFunction?.manager.asAccount.id && (
                <Address
                  addreth={{
                    shortenAddress: 10,
                    address: accessManagedTargetFunction.manager.asAccount.id,
                  }}
                  onDetail={{
                    type: AddressEntity.AccessManager,
                    id: accessManagedTargetFunction.manager.asAccount.id,
                  }}
                />
              )}
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">Target</Heading>
              {accessManagedTargetFunction?.target.asAccount.id && (
                <Address
                  addreth={{
                    shortenAddress: 10,
                    address: accessManagedTargetFunction.target.asAccount.id,
                  }}
                  onDetail={{
                    type: AddressEntity.AccessManagerTarget,
                    id: accessManagedTargetFunction.target.asAccount.id,
                  }}
                />
              )}
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">
                Allowed role
                <Info ml="3" mt="1">
                  <Text size="1">
                    Only members of this role can call this function.
                  </Text>
                </Info>
              </Heading>
              {accessManagedTargetFunction?.role && (
                <Role
                  size="2"
                  accessManagerRole={accessManagedTargetFunction.role}
                  icons={{ navigate: true }}
                />
              )}
            </Flex>
          </Flex>
        ) : (
          <Empty />
        )}
      </Box>
    </Function>
  );
};

export default AccessManagerTargetFunction;
