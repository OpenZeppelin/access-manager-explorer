"use client";
import { Box, Card, Callout, Flex, Heading, Separator } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import Skeleton from "./skeleton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity, EntityPrefix } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Address from "@/components/address";
import { ACCESS_MANAGED_QUERY } from "./requests";
import ROUTES from "@/config/routes";
import { useFavorites } from "@/providers/favorites";
import Empty from "./empty";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  address: AddressType;
  truncate: ComponentProps<typeof Address>["truncate"];
  isLast: boolean;
}

const AccessManaged: FC<Props> = ({
  address,
  truncate,
  className,
  depth,
  isLast,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGED_QUERY,
    variables: {
      id: address,
    },
  });

  const remove = useRemoveEntity(depth);

  const accessManaged = data?.accessManaged;

  const favorites = useFavorites();

  return (
    <Account
      id={address}
      favorites={{
        toggle: () => {
          if (!favorites.isFavorite(AddressEntity.AccessManaged, address)) {
            favorites.setFavorite([
              AddressEntity.AccessManaged,
              {
                [address]: address,
              },
            ]);
          } else {
            favorites.removeFavorite(AddressEntity.AccessManaged, address);
          }
        },
        isFavorite: favorites.isFavorite(AddressEntity.AccessManaged, address),
      }}
      remove={remove}
      entityType={AddressEntity.AccessManaged}
      description="An contract that inherits from AccessManaged and obeys to an authority."
      address={address}
      className={className}
      truncate={truncate}
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
        ) : accessManaged ? (
          <Flex direction="column">
            <Flex align="center" width="100%" justify="between">
              <Heading size="2">Authority</Heading>
              <Address
                truncate={{
                  leading: 10,
                  trailing: 10,
                }}
                icons={{
                  etherscan: true,
                  copy: true,
                  navigate: accessManaged?.authority.asAccessManager?.id
                    ? {
                        id: ROUTES.EXPLORER.DETAILS(
                          EntityPrefix.AccessManager,
                          accessManaged?.authority.asAccessManager.id
                        ),
                      }
                    : undefined,
                }}
                address={{
                  value: accessManaged?.authority.id,
                }}
              />
            </Flex>
            <Separator size="4" my="3" />
            {(accessManaged?.asAccount.targettedBy?.length ?? 0) > 0 && (
              <Heading size="2">Targetted by:</Heading>
            )}
            {accessManaged?.asAccount.targettedBy.map((target) => (
              <Card key={target.id} my="2" size="1">
                <Address
                  key={target.id}
                  truncate={{
                    leading: 10,
                    trailing: 10,
                  }}
                  address={{
                    value: target.manager.asAccount.id,
                  }}
                  icons={{
                    etherscan: true,
                    copy: true,
                    navigate: {
                      id: ROUTES.EXPLORER.DETAILS(
                        EntityPrefix.AccessManager,
                        target.manager.asAccount.id
                      ),
                    },
                  }}
                />
              </Card>
            ))}
          </Flex>
        ) : (
          <Empty />
        )}
      </Box>
    </Account>
  );
};

export default AccessManaged;
