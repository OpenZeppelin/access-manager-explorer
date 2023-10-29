"use client";
import { Flex } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Address from "@/components/address";
import { Address as AddressType } from "viem";
import Entity from "../entity";

interface Props extends Omit<ComponentProps<typeof Entity>, "header"> {
  address: AddressType;
  shortenAddress?: ComponentProps<typeof Address>["addreth"]["shortenAddress"];
}

const Account: FC<Props> = ({
  address,
  shortenAddress,
  children,
  ...props
}) => {
  return (
    <Entity
      header={
        <Flex mr="auto">
          <Address
            mr="2"
            addreth={{
              address,
              shortenAddress,
              theme: {
                fontSize: 18,
                badgeGap: 6,
              },
            }}
          />
        </Flex>
      }
      {...props}
    >
      {children}
    </Entity>
  );
};

export default Account;
