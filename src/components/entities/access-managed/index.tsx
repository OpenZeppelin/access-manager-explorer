"use client";
import {
  Box,
  Card,
  Callout,
  Tabs,
  Flex,
  Heading,
  Separator,
} from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import Skeleton from "./skeleton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Address from "@/components/address";
import { ACCESS_MANAGED_QUERY } from "./requests";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  address: AddressType;
  truncate: ComponentProps<typeof Address>["truncate"];
}

const AccessManaged: FC<Props> = ({
  address,
  truncate,
  className,
  depth,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGED_QUERY,
    variables: {
      id: address,
    },
  });

  const remove = useRemoveEntity(depth);

  return (
    <Account
      remove={remove}
      entityType={AddressEntity.AccessManaged}
      description="An contract that inherits from AccessManaged and obeys to an authority."
      address={address}
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
              <Heading size="2">Manager</Heading>
              <Address
                truncate={{
                  leading: 10,
                  trailing: 10,
                }}
                icons={{
                  etherscan: true,
                  copy: true,
                }}
                address={{
                  value: data.accessManaged.authority.id,
                }}
              />
            </Flex>
            <Separator size="4" my="3" />
            {data.accessManaged.asAccount.targettedBy.length > 0 && (
              <Heading size="2">Targetted by:</Heading>
            )}
            {data.accessManaged.asAccount.targettedBy.map((target: any) => (
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
                  }}
                />
              </Card>
            ))}
          </Flex>
        )}
      </Box>
    </Account>
  );
};

export default AccessManaged;
