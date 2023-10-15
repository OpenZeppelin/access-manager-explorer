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
import { ACESS_MANAGER_ROLE_QUERY } from "./requests";
import Skeleton from "./skeleton";
import { CircleIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Entity, EntityPrefix } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Role from "../as/role";
import ROUTES from "@/config/routes";
import Address from "@/components/address";
import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";
import RoleBadge from "@/components/role";

interface Props extends ComponentProps<typeof Card> {
  id: string;
  depth: number;
}

const AccessManagerRole: FC<Props> = ({ id, className, depth, ...props }) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACESS_MANAGER_ROLE_QUERY,
    variables: {
      id,
    },
  });

  const remove = useRemoveEntity(depth);
  const roleId = useMemo(() => id.split("/").reverse()[0], [id]);

  return (
    <Role
      remove={remove}
      entityType={Entity.AccessManagerRole}
      description="A role is allowed to call functions by an AccessManager"
      role={data?.accessManagerRole || { id: id, asRole: { id: roleId } }}
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
                      data.accessManagerRole.manager.asAccount.id
                    ),
                  },
                }}
                address={{
                  value: data.accessManagerRole.manager.asAccount.id,
                }}
              />
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">
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
              <DelayedValue size="2" {...data.accessManagerRole.grantDelay} />
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">
                Admin
                <Info ml="3" mt="1">
                  <Text size="1">
                    Each role has an admin whose members are able to call the{" "}
                    <Code>updateAuthority</Code>, <Code>setTargetClosed</Code>{" "}
                    and <Code>setTargetFunctionRole</Code> functions.
                  </Text>
                </Info>
              </Heading>
              <RoleBadge
                size="2"
                role={data.accessManagerRole.admin}
                icons={{ navigate: true }}
              />
            </Flex>
            <Separator size="4" my="3" />
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">
                Guardian
                <Info ml="3" mt="1">
                  <Text size="1">
                    Each role has a guardian who can can <Code>cancel</Code> on
                    delayed operations before they're executed.
                  </Text>
                </Info>
              </Heading>
              <RoleBadge
                size="2"
                role={data.accessManagerRole.guardian}
                icons={{ navigate: true }}
              />
            </Flex>
            <Separator size="4" my="3" />
            {data.accessManagerRole.adminOf.length > 0 && (
              <Flex direction="column">
                <Heading size="3" mt="4" mb="2">
                  Admin of
                </Heading>
                <Grid columns="2" gap="3" width="auto">
                  {data.accessManagerRole.adminOf.map((role: any) => (
                    <RoleBadge
                      size="2"
                      icons={{ navigate: true }}
                      role={role}
                    />
                  ))}
                </Grid>
              </Flex>
            )}
            {data.accessManagerRole.guardianOf.length > 0 && (
              <Flex direction="column">
                <Heading size="3" mt="4" mb="2">
                  Guardian of
                </Heading>
                <Grid columns="2" gap="3" width="auto">
                  {data.accessManagerRole.guardianOf.map((role: any) => (
                    <RoleBadge
                      size="2"
                      icons={{ navigate: true }}
                      role={role}
                    />
                  ))}
                </Grid>
              </Flex>
            )}
            <Heading size="3" mt="4" mb="2">
              Members
            </Heading>
            {data.accessManagerRole.members.length > 0 ? (
              <Flex direction="column">
                <Flex direction="column" gap="2">
                  {data.accessManagerRole.members.map(
                    ({ id, asAccount }: any) => (
                      <Card key={id} size="1">
                        <Address
                          key={id}
                          truncate={{
                            leading: 4,
                            trailing: 6,
                          }}
                          address={{
                            value: asAccount.id,
                          }}
                          icons={{
                            etherscan: true,
                            copy: true,
                            navigate: {
                              id: ROUTES.EXPLORER.DETAILS(
                                EntityPrefix.AccessManagerRoleMember,
                                id
                              ),
                            },
                          }}
                        />
                      </Card>
                    )
                  )}
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
            <Heading size="3" mt="4" mb="2">
              Functions
            </Heading>
            {data.accessManagerRole.functions.length > 0 ? (
              <Flex direction="column">
                {data.accessManagerRole.functions.map((method: any) => (
                  <Code my="1" key={method.id}>
                    {method.asSelector.id}
                  </Code>
                ))}
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
        )}
      </Box>
    </Role>
  );
};

export default AccessManagerRole;
