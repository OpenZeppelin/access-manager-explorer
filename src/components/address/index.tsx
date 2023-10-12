import { Avatar, Flex, Text } from "@radix-ui/themes";
import { cn, truncateAddress } from "@/utils";
import { ComponentProps, FC, HTMLAttributes } from "react";
import Gradient from "./gradient";
import { Address } from "viem";

type AvatarProps = ComponentProps<typeof Avatar>;
type TextProps = ComponentProps<typeof Text>;
type FlexProps = ComponentProps<typeof Flex>;

interface AddressProps extends Partial<Omit<TextProps, "address.value">> {
  value: Address;
}

interface Props extends FlexProps {
  address: AddressProps;
  avatar?: Partial<Omit<AvatarProps, "fallback">>;
  truncate?: boolean;
}

const DEFAULT_SIZE = "1";

const Address: FC<Props> = ({ address, avatar, truncate, ...props }) => {
  const displayAddress = truncate
    ? truncateAddress(address.value)
    : address.value;

  const size = avatar?.size || DEFAULT_SIZE;

  return (
    <Flex align="center" width="100%" {...props}>
      <Avatar
        size={size}
        className="mr-2"
        radius="full"
        fallback={
          <Gradient
            svgClassName={`rt-AvatarRoot rt-r-size-${size}`}
            address={address.value}
          />
        }
        {...avatar}
      />
      <Text weight="light" {...(address as TextProps)}>
        {displayAddress}
      </Text>
    </Flex>
  );
};

export default Address;
