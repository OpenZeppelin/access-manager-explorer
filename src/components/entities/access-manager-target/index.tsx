"use client";
import {
  Box,
  Card,
  Callout,
  Flex,
  Separator,
  Heading,
  Badge,
  Text,
  Code,
  Button,
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
import { AddressEntity, EntityPrefix } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Address from "@/components/address";
import Function from "@/components/function";
import { ACCESS_MANAGER_TARGET_QUERY } from "./request";
import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";
import Link from "next/link";
import { join } from "path";
import ROUTES from "@/config/routes";
import { usePathname } from "next/navigation";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  id: string;
  truncate: ComponentProps<typeof Address>["truncate"];
}

const AccessManagerTarget: FC<Props> = ({
  id,
  truncate,
  className,
  depth,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_TARGET_QUERY,
    variables: {
      id,
    },
  });

  const remove = useRemoveEntity(depth);

  const address = useMemo(() => id.split("/").reverse()[0], [id]);

  const pathname = usePathname();

  return (
    <Account
      remove={remove}
      entityType={AddressEntity.AccessManagerTarget}
      description="An address targetted by an AccessManager"
      address={address as AddressType}
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
          <Flex direction="column">
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">Targetted by</Heading>
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
                      data.accessManagerTarget.manager.asAccount.id
                    ),
                  },
                }}
                address={{
                  value: data.accessManagerTarget.manager.asAccount.id,
                }}
              />
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
              <DelayedValue size="2" {...data.accessManagerTarget.adminDelay} />
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Flex>
                <Heading size="2">Status</Heading>
                <Info ml="3" mt="1">
                  <Text size="1">
                    A target can be closed, which means that every{" "}
                    <Code>canCall</Code> invokation will return false. If this
                    contract's authority is the access manager targetting it,
                    every call will revert.
                  </Text>
                </Info>
              </Flex>
              {data.accessManagerTarget.closed ? (
                <Badge color="red">Closed</Badge>
              ) : (
                <Badge color="green">Open</Badge>
              )}
            </Flex>
            {data.accessManagerTarget.asAccount.asAccessManaged?.id && (
              <Button asChild variant="surface" size="1" mt="4" color="gray">
                <Link
                  scroll={false}
                  href={join(
                    pathname,
                    ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManaged,
                      data.accessManagerTarget.asAccount.asAccessManaged?.id
                    )
                  )}
                >
                  See as AccessManaged <ArrowRightIcon />
                </Link>
              </Button>
            )}
            <Heading size="3" mt="4" mb="2">
              Managed functions
            </Heading>
            {data.accessManagerTarget.functions.length > 0 ? (
              <Flex direction="column">
                {data.accessManagerTarget.functions.map((method: any) => (
                  <Function
                    my="1"
                    size="4"
                    method={method}
                    icons={{
                      navigate: {
                        id: ROUTES.EXPLORER.DETAILS(
                          EntityPrefix.AccessManagerTargetFunction,
                          method.id
                        ),
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
        )}
      </Box>
    </Account>
  );
};

export default AccessManagerTarget;
