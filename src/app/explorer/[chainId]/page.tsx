"use client";
import AccessManaged from "@/components/entities/access-managed";
import AccessManager from "@/components/entities/access-manager";
import AccessManagerRole from "@/components/entities/access-manager-role";
import AccessManagerMember from "@/components/entities/access-manager-role-member";
import AccessManagerTarget from "@/components/entities/access-manager-target";
import AccessManagerTargetFunction from "@/components/entities/access-manager-target-function";
import { AddressEntity, Entity } from "@/types";
import { FC, useMemo } from "react";
import { Address } from "viem";
import { useEntities } from "@/providers/entities";

const Explorer: FC<{}> = () => {
  const { entities } = useEntities();

  return useMemo(
    () =>
      entities?.map(({ type, id }, depth) => {
        const commonProps = {
          key: id,
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
                key={id}
                id={id}
                shortenAddress={false}
                style={{
                  maxWidth: 520,
                  minWidth: 520,
                  ...commonStyles,
                }}
              />
            );
          case AddressEntity.AccessManaged:
            return (
              <AccessManaged
                {...commonProps}
                key={id}
                address={id as Address}
                shortenAddress={false}
                style={{
                  maxWidth: 520,
                  minWidth: 520,
                  ...commonStyles,
                }}
              />
            );
          case AddressEntity.AccessManagerTarget:
            return (
              <AccessManagerTarget
                {...commonProps}
                key={id}
                id={id}
                shortenAddress={false}
                style={{
                  maxWidth: 460,
                  minWidth: 460,
                  ...commonStyles,
                }}
              />
            );
          case Entity.AccessManagerRole:
            return (
              <AccessManagerRole
                {...commonProps}
                key={id}
                id={id}
                style={{
                  maxWidth: 460,
                  minWidth: 460,
                  ...commonStyles,
                }}
              />
            );
          case Entity.AccessManagerTargetFunction:
            return (
              <AccessManagerTargetFunction
                {...commonProps}
                key={id}
                id={id}
                style={{
                  maxWidth: 460,
                  minWidth: 460,
                  ...commonStyles,
                }}
              />
            );
        }
      }),
    [entities]
  );
};

export default Explorer;