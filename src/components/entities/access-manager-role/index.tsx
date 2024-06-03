"use client";
import {
  Box,
  Card,
  Callout,
  Flex,
  Heading,
  Separator,
  Text,
  Code,
  Grid,
} from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { useQuery } from "urql";
import { ACCESS_MANAGER_ROLE_QUERY } from "./requests";
import Skeleton from "./skeleton";
import { CircleIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { AddressEntity, Entity } from "@/types";
import Role from "../as/role";
import Address from "@/components/address";
import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";
import RoleBadge from "@/components/role";
import FunctionBadge from "@/components/function";
import { makeFragmentData, useFragment as asFragment } from "@/gql";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "@/components/role/requests";
import { ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT } from "@/components/function/requests";
import { useFavorites } from "@/providers/favorites";
import Empty from "../empty";
import { useEntities } from "@/providers/entities";

interface Props extends ComponentProps<typeof Card> {
  id: string;
  depth: number;
  isLast: boolean;
}

const AccessManagerRole: FC<Props> = ({
  id,
  className,
  depth,
  isLast,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_ROLE_QUERY,
    variables: {
      id,
    },
  });

  const { splice } = useEntities();
  const roleId = useMemo(() => id.split("/").reverse()[0], [id]);

  const accessManagerRole = data?.accessManagerRole;

  const role =
    accessManagerRole ??
    makeFragmentData(
      {
        id: roleId,
        asRole: {
          id: roleId,
        },
      },
      ACCESS_MANAGER_ROLE_FRAGMENT
    );

  const favorites = useFavorites();

  return (
    <Role
      id={id}
      favorites={{
        toggle: () => {
          if (!favorites.isFavorite(Entity.AccessManagerRole, roleId)) {
            favorites.setFavorite([
              Entity.AccessManagerRole,
              {
                [roleId]: id,
              },
            ]);
          } else {
            favorites.removeFavorite(Entity.AccessManagerRole, roleId);
          }
        },
        isFavorite: favorites.isFavorite(Entity.AccessManagerRole, roleId),
      }}
      remove={() => splice(depth, 1)}
      entityType={Entity.AccessManagerRole}
      description="A role is allowed to call functions by an AccessManager"
      accessManagerRole={role}
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
        ) : accessManagerRole ? (
          <Flex direction="column">
            <Flex align="center" width="100%" justify="between">
              <Heading as="h2" size="2">Manager</Heading>
              <Address
                addreth={{
                  address: accessManagerRole?.manager.asAccount.id,
                  shortenAddress: 10,
                }}
                onDetail={{
                  entity: {
                    type: AddressEntity.AccessManager,
                    id: accessManagerRole?.manager.asAccount.id,
                  },
                  at: depth,
                }}
              />
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading as="h2" size="2">
                Grant delay
                <Info ml="3" mt="1">
                  <Text size="1">
                    When a role is granted to a user, the user will be able to
                    use its role after a delay has passed. This delay are
                    defined by role using the manager admins via{" "}
                    <Code>setGrantDelay</Code>.
                  </Text>
                </Info>
              </Heading>
              {accessManagerRole?.grantDelay && (
                <DelayedValue size="2" value={accessManagerRole?.grantDelay} />
              )}
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading as="h2" size="2">
                Admin
                <Info ml="3" mt="1">
                  <Text size="1">
                    Each role has an admin whose members are able to call the{" "}
                    <Code>updateAuthority</Code>, <Code>setTargetClosed</Code>{" "}
                    and <Code>setTargetFunctionRole</Code> functions.
                  </Text>
                </Info>
              </Heading>
              {accessManagerRole?.admin && (
                <RoleBadge
                  size="2"
                  accessManagerRole={accessManagerRole.admin}
                  icons={{
                    navigate: {
                      at: depth,
                    },
                  }}
                />
              )}
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading as="h2" size="2">
                Guardian
                <Info ml="3" mt="1">
                  <Text size="1">
                    Each role has a guardian who can can <Code>cancel</Code> on
                    delayed operations before they are executed.
                  </Text>
                </Info>
              </Heading>
              {accessManagerRole?.guardian && (
                <RoleBadge
                  size="2"
                  accessManagerRole={accessManagerRole.guardian}
                  icons={{
                    navigate: {
                      at: depth,
                    },
                  }}
                />
              )}
            </Flex>
            <Separator size="4" my="3" />
            {(accessManagerRole?.adminOf.length ?? 0) > 0 && (
              <Flex direction="column">
                <Heading as="h2" size="3" mt="4" mb="2">
                  Admin of
                </Heading>
                <Grid columns="2" gap="3" width="auto">
                  {accessManagerRole?.adminOf.map((role) => (
                    <RoleBadge
                      key={asFragment(ACCESS_MANAGER_ROLE_FRAGMENT, role).id}
                      size="2"
                      icons={{
                        navigate: {
                          at: depth,
                        },
                      }}
                      accessManagerRole={role}
                    />
                  ))}
                </Grid>
              </Flex>
            )}
            {(accessManagerRole?.guardianOf.length ?? 0) > 0 && (
              <Flex direction="column">
                <Heading as="h2" size="3" mt="4" mb="2">
                  Guardian of
                </Heading>
                <Grid columns="2" gap="3" width="auto">
                  {accessManagerRole?.guardianOf.map((role) => (
                    <RoleBadge
                      key={asFragment(ACCESS_MANAGER_ROLE_FRAGMENT, role).id}
                      size="2"
                      icons={{
                        navigate: {
                          at: depth,
                        },
                      }}
                      accessManagerRole={role}
                    />
                  ))}
                </Grid>
              </Flex>
            )}
            <Heading as="h2" size="3" mt="4" mb="2">
              Members
            </Heading>
            {(accessManagerRole?.members.length ?? 0) > 0 ? (
              <Flex direction="column">
                <Flex direction="column" gap="2">
                  {accessManagerRole?.members.map(({ id, asAccount }) => (
                    <Card key={id} size="1">
                      <Address
                        addreth={{
                          shortenAddress: false,
                          address: asAccount.id,
                        }}
                        onDetail={{
                          entity: {
                            type: AddressEntity.AccessManagerRoleMember,
                            id,
                          },
                          at: depth,
                        }}
                      />
                    </Card>
                  ))}
                </Flex>
              </Flex>
            ) : (
              <Callout.Root>
                <Callout.Icon>
                  <CircleIcon />
                </Callout.Icon>
                <Callout.Text>No members</Callout.Text>
              </Callout.Root>
            )}
            <Heading as="h2" size="3" mt="4" mb="2">
              Functions
            </Heading>
            {(accessManagerRole?.functions.length ?? 0) > 0 ? (
              <Flex direction="column">
                {accessManagerRole?.functions.map((method) => {
                  const { id } = asFragment(
                    ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT,
                    method
                  );
                  return (
                    <FunctionBadge
                      key={id}
                      my="1"
                      method={method}
                      icons={{
                        onDetail: {
                          entity: {
                            type: Entity.AccessManagerTargetFunction,
                            id,
                          },
                          at: depth,
                        },
                      }}
                    />
                  );
                })}
              </Flex>
            ) : (
              <Callout.Root>
                <Callout.Icon>
                  <CircleIcon />
                </Callout.Icon>
                <Callout.Text>No allowed functions</Callout.Text>
              </Callout.Root>
            )}
          </Flex>
        ) : (
          <Empty
            callout={{
              text: (clientChain) =>
                `Manager Role not found ${clientChain.name} (${clientChain.id}).`,
            }}
          />
        )}
      </Box>
    </Role>
  );
};

export default AccessManagerRole;
