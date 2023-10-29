import AccessManaged from "@/components/entities/access-managed";
import AccessManager from "@/components/entities/access-manager";
import AccessManagerRole from "@/components/entities/access-manager-role";
import AccessManagerMember from "@/components/entities/access-manager-role-member";
import AccessManagerTarget from "@/components/entities/access-manager-target";
import AccessManagerTargetFunction from "@/components/entities/access-manager-target-function";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { toGraphId } from "@/config/routes";
import { EntityPrefix, SupportedChainId } from "@/types";
import { Flex, ScrollArea } from "@radix-ui/themes";
import { FC, useMemo } from "react";
import { Address } from "viem";
import { RainbowKit, Urql } from "@/components/providers";
import { NextIntlClientProvider } from "next-intl";
import { FavoritesProvider } from "@/providers/favorites";
import { RouteNetworkProvider } from "@/providers/route-network";

interface Props {
  params: {
    entities: `${EntityPrefix}-${Address}`[];
    chainId: SupportedChainId;
  };
}

const Explorer: FC<Props> = ({ params: { entities, chainId } }) => {
  const content = useMemo(
    () =>
      entities?.map((prefixedId, depth) => {
        const { type, id } = toGraphId(prefixedId);

        const commonProps = {
          key: prefixedId,
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
          case "mgr":
            return (
              <AccessManager
                {...commonProps}
                address={id as Address}
                truncate={{
                  leading: 4,
                  trailing: 6,
                }}
                style={{
                  maxWidth: 580,
                  minWidth: 580,
                  ...commonStyles,
                }}
              />
            );
          case "mbr":
            return (
              <AccessManagerMember
                {...commonProps}
                key={prefixedId}
                id={id}
                truncate={{
                  leading: 2,
                  trailing: 4,
                }}
                style={{
                  maxWidth: 520,
                  minWidth: 520,
                  ...commonStyles,
                }}
              />
            );
          case "mgd":
            return (
              <AccessManaged
                {...commonProps}
                key={prefixedId}
                address={id as Address}
                truncate={{
                  leading: 2,
                  trailing: 4,
                }}
                style={{
                  maxWidth: 520,
                  minWidth: 520,
                  ...commonStyles,
                }}
              />
            );
          case "tgt":
            return (
              <AccessManagerTarget
                {...commonProps}
                key={prefixedId}
                id={id}
                truncate={{
                  leading: 2,
                  trailing: 4,
                }}
                style={{
                  maxWidth: 460,
                  minWidth: 460,
                  ...commonStyles,
                }}
              />
            );
          case "role":
            return (
              <AccessManagerRole
                {...commonProps}
                key={prefixedId}
                id={id}
                style={{
                  maxWidth: 460,
                  minWidth: 460,
                  ...commonStyles,
                }}
              />
            );
          case "fn":
            return (
              <AccessManagerTargetFunction
                {...commonProps}
                key={prefixedId}
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

  return (
    <RouteNetworkProvider routeChainId={chainId}>
      <Urql>
        <RainbowKit>
          <NextIntlClientProvider locale="en" messages={{}}>
            <FavoritesProvider>
              <Navbar />
              <ScrollArea size="2" scrollbars="horizontal">
                <Flex className="min-w-130vw">
                  <Sidebar
                    style={{
                      minHeight: "calc(100vh - 64px)",
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  />
                  {content}
                </Flex>
              </ScrollArea>
            </FavoritesProvider>
          </NextIntlClientProvider>
        </RainbowKit>
      </Urql>
    </RouteNetworkProvider>
  );
};

export default Explorer;
