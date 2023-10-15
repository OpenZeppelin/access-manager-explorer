"use client";
import { Card } from "@radix-ui/themes";
import { ComponentProps, FC, ReactNode } from "react";
import Address from "@/components/address";
import { Address as AddressType } from "viem";
import Entity from "../entity";

interface Props extends Omit<ComponentProps<typeof Entity>, "header"> {
  address: AddressType;
  truncate: ComponentProps<typeof Address>["truncate"];
}

const Account: FC<Props> = ({ address, truncate, children, ...props }) => {
  return (
    <Entity
      header={
        <Address
          mr="auto"
          address={{
            value: address,
            weight: "medium",
            size: "6",
          }}
          avatar={{
            size: "2",
          }}
          icons={{
            etherscan: true,
            copy: true,
          }}
          truncate={truncate}
        />
      }
      {...props}
    >
      {children}
    </Entity>
  );
};

export default Account;
