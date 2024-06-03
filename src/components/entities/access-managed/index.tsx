"use client";
import { Box, Card, Callout, Flex, Heading, Separator } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import Skeleton from "./skeleton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity } from "@/types";
import Address from "@/components/address";
import { ACCESS_MANAGED_QUERY } from "./requests";
import { useFavorites } from "@/providers/favorites";
import Empty from "../empty";
import { useEntities } from "@/providers/entities";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  address: AddressType;
  shortenAddress: ComponentProps<typeof Address>["addreth"]["shortenAddress"];
  isLast: boolean;
}

const AccessManaged: FC<Props> = ({
  address,
  shortenAddress,
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

  const { splice } = useEntities();

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
      remove={() => splice(depth, 1)}
      entityType={AddressEntity.AccessManaged}
      description="An contract that inherits from AccessManaged and obeys to an authority."
      address={address}
      className={className}
      shortenAddress={shortenAddress}
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
              <Heading as="h2" size="2">Authority</Heading>
              <Address
                addreth={{
                  shortenAddress: 10,
                  address: accessManaged?.authority.id,
                }}
                onDetail={{
                  entity: {
                    type: AddressEntity.AccessManager,
                    id: accessManaged?.authority.asAccessManager?.id,
                  },
                  at: depth,
                }}
              />
            </Flex>
            <Separator size="4" my="3" />
            {(accessManaged?.asAccount.targettedBy?.length ?? 0) > 0 && (
              <Heading as="h2" size="2">Targetted by:</Heading>
            )}
            {accessManaged?.asAccount.targettedBy.map((target) => (
              <Card key={target.id} my="2" size="1">
                <Address
                  key={target.id}
                  addreth={{
                    shortenAddress: 10,
                    address: target.manager.asAccount.id,
                  }}
                  onDetail={{
                    entity: {
                      type: AddressEntity.AccessManager,
                      id: target.manager.asAccount.id,
                    },
                    at: depth,
                  }}
                />
              </Card>
            ))}
          </Flex>
        ) : (
          <Empty
            callout={{
              text: (clientChain) =>
                `Access Managed contract not found for ${clientChain.name} (${clientChain.id}).`,
            }}
          />
        )}
      </Box>
    </Account>
  );
};

export default AccessManaged;
