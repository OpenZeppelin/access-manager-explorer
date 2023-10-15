"use client";
import { Box, Card, Callout, Tabs } from "@radix-ui/themes";
import { ComponentProps, FC, useMemo } from "react";
import { Address as AddressType } from "viem";
import { useQuery } from "urql";
import Skeleton from "./skeleton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Account from "../as/account";
import { AddressEntity } from "@/types";
import useRemoveEntity from "@/hooks/use-remove-entity";
import Address from "@/components/address";
import { ACCESS_MANAGER_TARGET_QUERY } from "./request";

interface Props extends ComponentProps<typeof Card> {
  depth: number;
  id: string;
  truncate: ComponentProps<typeof Address>["truncate"];
}

const AccessManagerTarget: FC<Props> = ({
  id,
  truncate,
  className,
  depth,
  ...props
}) => {
  const [{ data, fetching, error }] = useQuery({
    query: ACCESS_MANAGER_TARGET_QUERY,
    variables: {
      id,
    },
  });

  const remove = useRemoveEntity(depth);

  const address = useMemo(() => id.split("/").reverse()[0], [id]);

  return (
    <Account
      remove={remove}
      entityType={AddressEntity.AccessManagerTarget}
      description="A contract targetted by an AccessManager that stores its permissions."
      address={address as AddressType}
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
          <>
            <p>hello</p>
          </>
        )}
      </Box>
    </Account>
  );
};

export default AccessManagerTarget;
