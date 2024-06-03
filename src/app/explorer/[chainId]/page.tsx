"use client";
import AccessManaged from "@/components/entities/access-managed";
import AccessManager from "@/components/entities/access-manager";
import AccessManagerRole from "@/components/entities/access-manager-role";
import AccessManagerMember from "@/components/entities/access-manager-role-member";
import AccessManagerTarget from "@/components/entities/access-manager-target";
import AccessManagerTargetFunction from "@/components/entities/access-manager-target-function";
import { AddressEntity, Entity } from "@/types";
import { FC } from "react";
import { Address } from "viem";
import { useEntities } from "@/providers/entities";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { gaId } from "@/config/env";
import { gtag } from "@/config/site";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const DEMO_MANAGER = "0xc56F7D84c83911767EAcaabA5Ae64A8DFCBC868F";

interface Props {}

const Explorer: FC<Props> = () => {
  const { entities, clearAndPush } = useEntities();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    gtag("config", gaId, {
      page_path: `${pathname}?${searchParams}`,
    });
  }, [pathname, searchParams]);

  if (entities.length === 0) {
    return (
      <Flex width="100%" direction="column" justify="center" align="center">
        <Heading as="h1" size="3" className="text-center">
          Not sure where to start? 👇
        </Heading>
        <Button
          mt="4"
          variant="surface"
          size="3"
          onClick={() =>
            clearAndPush({
              type: AddressEntity.AccessManager,
              id: DEMO_MANAGER,
            })
          }
        >
          Try the demo manager <ArrowRightIcon className="ml-2" />
        </Button>
      </Flex>
    );
  }

  return entities?.map(({ type, id }, depth) => {
    const commonProps = {
      depth,
      size: "4",
      variant: "classic",
      className: "no-radius",
      isLast: depth == entities.length - 1,
    } as const;

    const commonStyles = {
      border: 0,
      maxHeight: "calc(100vh - 64px)",
    };

    switch (type) {
      case AddressEntity.AccessManager:
        return (
          <AccessManager
            {...commonProps}
            key={id + depth}
            address={id as Address}
            shortenAddress={false}
            style={{
              maxWidth: 580,
              minWidth: 580,
              ...commonStyles,
            }}
          />
        );
      case AddressEntity.AccessManagerRoleMember:
        return (
          <AccessManagerMember
            {...commonProps}
            key={id + depth}
            id={id}
            shortenAddress={false}
            style={{
              maxWidth: 540,
              minWidth: 540,
              ...commonStyles,
            }}
          />
        );
      case AddressEntity.AccessManaged:
        return (
          <AccessManaged
            {...commonProps}
            key={id + depth}
            address={id as Address}
            shortenAddress={false}
            style={{
              maxWidth: 540,
              minWidth: 540,
              ...commonStyles,
            }}
          />
        );
      case AddressEntity.AccessManagerTarget:
        return (
          <AccessManagerTarget
            {...commonProps}
            key={id + depth}
            id={id}
            shortenAddress={false}
            style={{
              maxWidth: 480,
              minWidth: 480,
              ...commonStyles,
            }}
          />
        );
      case Entity.AccessManagerRole:
        return (
          <AccessManagerRole
            {...commonProps}
            key={id + depth}
            id={id}
            style={{
              maxWidth: 480,
              minWidth: 480,
              ...commonStyles,
            }}
          />
        );
      case Entity.AccessManagerTargetFunction:
        return (
          <AccessManagerTargetFunction
            {...commonProps}
            key={id + depth}
            id={id}
            style={{
              maxWidth: 480,
              minWidth: 480,
              ...commonStyles,
            }}
          />
        );
    }
  });
};

export default Explorer;
