"use client";
import {
  Badge,
  Card,
  Flex,
  Text,
  Separator,
  IconButton,
} from "@radix-ui/themes";
import { ComponentProps, FC, ReactNode, useCallback } from "react";
import Address from "@/components/address";
import { Address as AddressType } from "viem";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/utils";

import { AddressEntity } from "@/types";

interface Props extends ComponentProps<typeof Card> {
  entityType: AddressEntity;
  address: AddressType;
  children: ReactNode;
  description: string;
  remove: () => void;
}

const Account: FC<Props> = ({
  entityType,
  address,
  children,
  description,
  className,
  remove,
  ...props
}) => {
  return (
    <Card
      {...props}
      className={cn("max-h-full card-inner-overflow-y-scroll", className)}
    >
      <Flex align="center" mb="4">
        <Address
          address={{
            value: address,
            weight: "medium",
            size: "6",
          }}
          avatar={{
            size: "2",
          }}
          truncate={{
            leading: 10,
            trailing: 10,
          }}
          icons={{
            etherscan: true,
            copy: true,
          }}
        />
        <Badge size="2">{entityType}</Badge>
        <IconButton
          onClick={remove}
          ml="4"
          color="gray"
          size="3"
          variant="ghost"
        >
          <Cross2Icon />
        </IconButton>
      </Flex>
      <Text size="3">{description}</Text>
      <Separator orientation="horizontal" my="3" size="4" />
      {children}
    </Card>
  );
};

export default Account;
