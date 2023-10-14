"use client";
import { Box, Card, Callout } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import { ACCESS_MANAGER_MEMBER_QUERY } from "./requests";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  address: AddressType;
}

const AccessManagerMember: FC<Props> = ({
  address,
  className,
  depth,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_MEMBER_QUERY,
    variables: {
      id: address,
    },
  });

  const remove = useRemoveEntity(depth);

  return (
    <Account
      entityType={AddressEntity.AccessManagerRoleMember}
      description="A role member is an address that has a role in an AccessManager"
      address={address}
      remove={remove}
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
          <p>loading...</p>
        ) : (
          <>
            <p>...</p>
          </>
        )}
      </Box>
    </Account>
  );
};

export default AccessManagerMember;
