"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ComponentProps, FC, useMemo, useState } from "react";
import Address from "@/components/address";
import { Button, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useAccount from "@/hooks/use-account";
import { useQuery } from "urql";
import { ACCESS_MANAGER_ROLE_MEMBERS_QUERY } from "./requests";
import MemberOf from "./member-of";
import { useFavorites } from "@/providers/favorites";
import { AddressEntity, Entity, EntityPrefix } from "@/types";
import { Address as AddressType } from "viem";
import ROUTES from "@/config/routes";
import FavoritesSection from "./favorites-section";
import Role from "../role";
import { makeFragmentData } from "@/gql";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "../role/requests";
import Selector from "../function";
import { ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT } from "../function/requests";
import Link from "next/link";
import { join } from "path";

interface Props extends ComponentProps<typeof Card> {}

const DEMO_MANAGER = "0x4ee69a1703b717cb46cd12c71c6fe225f646ba1e";

const Sidebar: FC<Props> = (props) => {
  const [open, setOpen] = useState(true);
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const [{ data, fetching }] = useQuery({
    query: ACCESS_MANAGER_ROLE_MEMBERS_QUERY,
    variables: {
      address: address ?? "",
    },
    pause: !address,
  });

  const { getFavorites } = useFavorites();

  const accessManagerFavorites = useMemo(
    () => getFavorites(AddressEntity.AccessManager),
    [getFavorites]
  );
  const accessManagedFavorites = useMemo(
    () => getFavorites(AddressEntity.AccessManaged),
    [getFavorites]
  );
  const accessManagerRoleFavorites = useMemo(
    () => getFavorites(Entity.AccessManagerRole),
    [getFavorites]
  );
  const accessManagerRoleMemberFavorites = useMemo(
    () => getFavorites(AddressEntity.AccessManagerRoleMember),
    [getFavorites]
  );
  const accessManagerTargetFavorites = useMemo(
    () => getFavorites(AddressEntity.AccessManagerTarget),
    [getFavorites]
  );
  const accessManagerTargetFunctionFavorites = useMemo(
    () => getFavorites(Entity.AccessManagerTargetFunction),
    [getFavorites]
  );
  // const accessManagerOperationFavorites = useMemo(
  //   () => getFavorites(Entity.AccessManagerOperation),
  //   [getFavorites]
  // );

  return (
    <Card
      className={cn("no-radius flex border-r w-80", props.className)}
      size="2"
      style={{
        border: 0,
        ...props.style,
      }}
      {...props}
    >
      <Collapsible.Root
        className="w-full"
        defaultOpen={true}
        open={open && isConnected}
        onOpenChange={setOpen}
      >
        <Flex align="center" mb="1">
          {isConnected && (
            <Button ml="1" size="2" variant="ghost" color="gray">
              <Collapsible.Trigger asChild>
                <Flex>
                  {address && (
                    <Address
                      address={{
                        value: address,
                        weight: "medium",
                      }}
                      truncate={{
                        leading: 4,
                        trailing: 8,
                      }}
                    />
                  )}
                  {fetching ? (
                    <div
                      className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent text-gray-600 rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : !open ? (
                    <ChevronRightIcon width="16" height="16" />
                  ) : (
                    <ChevronDownIcon width="16" height="16" />
                  )}
                </Flex>
              </Collapsible.Trigger>
            </Button>
          )}
          {!isConnected && (
            <Button
              ml="1"
              size="2"
              variant="ghost"
              color="gray"
              onClick={openConnectModal}
            >
              <Heading size="2" mr="2">
                Add wallet
              </Heading>
              <PlusIcon width="16" height="16" />
            </Button>
          )}
        </Flex>
        <Collapsible.Content className="pt-2">
          {(data?.accessManagerRoleMembers ?? []).length == 0 ? (
            <Flex ml="4" direction="column">
              <Text size="2" color="gray">
                No membership found 🤷🏻‍♂️
              </Text>
              <Separator my="3" size="4" />
              <Button variant="surface" size="1" asChild>
                <Link
                  href={join(
                    ROUTES.EXPLORER.ROOT,
                    ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManager,
                      DEMO_MANAGER
                    )
                  )}
                  replace
                >
                  Try the demo manager <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
            </Flex>
          ) : (
            <Heading size="1" ml="4" mb="1">
              Member of
            </Heading>
          )}
          {data?.accessManagerRoleMembers?.map((membership) => (
            <MemberOf key={membership.id} membership={membership} />
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
      <Separator my="3" size="4" />
      {accessManagerFavorites.length > 0 && (
        <FavoritesSection
          name="Access Managers"
          data={accessManagerFavorites}
          onRender={([displayName, id]) => (
            <Button
              my="1"
              variant="ghost"
              color="gray"
              className="w-full"
              asChild
            >
              <Link
                scroll={false}
                href={join(
                  ROUTES.EXPLORER.ROOT,
                  ROUTES.EXPLORER.DETAILS(EntityPrefix.AccessManager, id)
                )}
                replace
              >
                <Address
                  p="1"
                  width="100%"
                  key={displayName}
                  truncate={{
                    leading: 4,
                    trailing: 6,
                  }}
                  address={{
                    value: id as AddressType,
                  }}
                />
              </Link>
            </Button>
          )}
        />
      )}
      {accessManagedFavorites.length > 0 && (
        <FavoritesSection
          name="Access Managed"
          data={accessManagedFavorites}
          onRender={([displayName, id]) => (
            <Button
              my="1"
              variant="ghost"
              color="gray"
              className="w-full"
              asChild
            >
              <Link
                scroll={false}
                href={join(
                  ROUTES.EXPLORER.ROOT,
                  ROUTES.EXPLORER.DETAILS(EntityPrefix.AccessManaged, id)
                )}
                replace
              >
                <Address
                  p="1"
                  width="100%"
                  key={displayName}
                  truncate={{
                    leading: 4,
                    trailing: 6,
                  }}
                  address={{
                    value: id as AddressType,
                  }}
                />
              </Link>
            </Button>
          )}
        />
      )}
      {accessManagerRoleFavorites.length > 0 && (
        <FavoritesSection
          name="Roles"
          data={accessManagerRoleFavorites}
          onRender={([displayName, id]) => {
            const [roleId, accessManager] = id.split("/").reverse();
            return (
              <Button
                my="1"
                variant="ghost"
                color="gray"
                className="w-full"
                asChild
              >
                <Link
                  scroll={false}
                  href={join(
                    ROUTES.EXPLORER.ROOT,
                    ROUTES.EXPLORER.DETAILS(EntityPrefix.AccessManagerRole, id)
                  )}
                  replace
                >
                  <Flex align="center" width="100%" key={displayName}>
                    <Role
                      accessManagerRole={makeFragmentData(
                        {
                          id: roleId,
                          asRole: {
                            id: roleId,
                          },
                        },
                        ACCESS_MANAGER_ROLE_FRAGMENT
                      )}
                    />
                    <Address
                      p="1"
                      ml="2"
                      width="100%"
                      truncate={{
                        leading: 4,
                        trailing: 6,
                      }}
                      address={{
                        value: accessManager as AddressType,
                      }}
                    />
                  </Flex>
                </Link>
              </Button>
            );
          }}
        />
      )}
      {accessManagerRoleMemberFavorites.length > 0 && (
        <FavoritesSection
          name="Memberships"
          data={accessManagerRoleMemberFavorites}
          onRender={([displayName, id]) => {
            const [member, roleId, accessManager] = id.split("/").reverse();
            return (
              <Button
                my="1"
                variant="ghost"
                color="gray"
                className="w-full"
                asChild
              >
                <Link
                  scroll={false}
                  href={join(
                    ROUTES.EXPLORER.ROOT,
                    ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManagerRoleMember,
                      id
                    )
                  )}
                  replace
                >
                  <Flex align="center" width="100%" key={displayName}>
                    <Address
                      p="1"
                      truncate={{
                        leading: 2,
                        trailing: 6,
                      }}
                      address={{
                        value: member as AddressType,
                      }}
                    />
                    <Role
                      accessManagerRole={makeFragmentData(
                        {
                          id: roleId,
                          asRole: {
                            id: roleId,
                          },
                        },
                        ACCESS_MANAGER_ROLE_FRAGMENT
                      )}
                    />
                    <Address
                      p="1"
                      ml="2"
                      width="100%"
                      truncate={{
                        leading: 2,
                        trailing: 4,
                      }}
                      address={{
                        value: accessManager as AddressType,
                      }}
                    />
                  </Flex>
                </Link>
              </Button>
            );
          }}
        />
      )}
      {accessManagerTargetFavorites.length > 0 && (
        <FavoritesSection
          name="Targets"
          data={accessManagerTargetFavorites}
          onRender={([displayName, id]) => {
            const [target] = id.split("/").reverse();
            return (
              <Button
                my="1"
                variant="ghost"
                color="gray"
                className="w-full"
                asChild
              >
                <Link
                  scroll={false}
                  href={join(
                    ROUTES.EXPLORER.ROOT,
                    ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManagerTarget,
                      id
                    )
                  )}
                  replace
                >
                  <Address
                    p="1"
                    width="100%"
                    key={displayName}
                    truncate={{
                      leading: 4,
                      trailing: 6,
                    }}
                    address={{
                      value: target as AddressType,
                    }}
                  />
                </Link>
              </Button>
            );
          }}
        />
      )}
      {accessManagerTargetFunctionFavorites.length > 0 && (
        <FavoritesSection
          name="Functions"
          data={accessManagerTargetFunctionFavorites}
          onRender={([displayName, id]) => {
            const [method, target] = id.split("/").reverse();
            return (
              <Button
                my="1"
                variant="ghost"
                color="gray"
                className="w-full"
                asChild
              >
                <Link
                  scroll={false}
                  href={join(
                    ROUTES.EXPLORER.ROOT,
                    ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManagerTargetFunction,
                      id
                    )
                  )}
                  replace
                >
                  <Flex align="center" width="100%" key={displayName}>
                    <Address
                      p="1"
                      key={displayName}
                      truncate={{
                        leading: 4,
                        trailing: 6,
                      }}
                      address={{
                        value: target as AddressType,
                      }}
                    />
                    <Selector
                      size="2"
                      method={makeFragmentData(
                        {
                          id: id,
                          asSelector: {
                            id: method,
                          },
                        },
                        ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT
                      )}
                    />
                  </Flex>
                </Link>
              </Button>
            );
          }}
        />
      )}
    </Card>
  );
};

export default Sidebar;
