"use client";
import {
  Box,
  Card,
  Callout,
  Tabs,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { useQuery } from "urql";
import { ACCESS_MANAGER_TARGET_FUNCTION_QUERY } from "./requests";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Entity, EntityPrefix } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Skeleton from "./skeleton";
import Function from "../as/function";
import Address from "@/components/address";
import ROUTES from "@/config/routes";
import Role from "@/components/role";
import Info from "@/components/info";

interface Props extends ComponentProps<typeof Card> {
  id: string;
  depth: number;
}

const AccessManagerTargetFunction: FC<Props> = ({
  id,
  className,
  depth,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_TARGET_FUNCTION_QUERY,
    variables: {
      id,
    },
  });

  const remove = useRemoveEntity(depth);

  const selector = useMemo(() => id.split("/").reverse()[0], [id]);

  return (
    <Function
      remove={remove}
      entityType={Entity.AccessManagerTargetFunction}
      description="A permissioned function defined by an AccessManager"
      method={
        data?.accessManagerTargetFunction ?? {
          id: selector,
          asSelector: {
            id: selector,
          },
        }
      }
      className={className}
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
                      data.accessManagerTargetFunction.manager.asAccount.id
                    ),
                  },
                }}
                address={{
                  value: data.accessManagerTargetFunction.manager.asAccount.id,
                }}
              />
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">Target</Heading>
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
                      data.accessManagerTargetFunction.target.asAccount.id
                    ),
                  },
                }}
                address={{
                  value: data.accessManagerTargetFunction.target.asAccount.id,
                }}
              />
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
              <Role
                size="2"
                role={data.accessManagerTargetFunction.role}
                icons={{ navigate: true }}
              />
            </Flex>
          </Flex>
        )}
      </Box>
    </Function>
  );
};

export default AccessManagerTargetFunction;
