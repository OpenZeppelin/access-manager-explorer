import { Avatar, Flex, Heading, IconButton } from "@radix-ui/themes";
import { truncateHex } from "@/utils";
import { ComponentProps, FC, useMemo } from "react";
import Gradient from "./gradient";
import { Address } from "viem";
import Icons from "./icons";

type AvatarProps = ComponentProps<typeof Avatar>;
type HeadingProps = ComponentProps<typeof Heading>;
type FlexProps = ComponentProps<typeof Flex>;
type IconButtonProps = ComponentProps<typeof IconButton>;

interface AddressProps extends Partial<Omit<HeadingProps, "value">> {
  value: Address;
}

interface IconProps {
  etherscan?: IconButtonProps | boolean;
  copy?: IconButtonProps | boolean;
  navigate?: IconButtonProps & { id: string };
}

interface Props extends FlexProps {
  address: AddressProps;
  avatar?: Partial<Omit<AvatarProps, "fallback">>;
  truncate?: Parameters<typeof truncateHex>[1] | boolean;
  icons?: IconProps;
}

const DEFAULT_SIZE = "1";

const Address: FC<Props> = ({ address, avatar, truncate, icons, ...props }) => {
  const displayAddress = useMemo(
    () =>
      !!truncate
        ? truncateHex(address.value, truncate === true ? undefined : truncate)
        : address.value,
    [address.value, truncate]
  );

  const size = avatar?.size || DEFAULT_SIZE;

  return (
    <Flex align="center" justify="between" {...props}>
      <Flex gap="2">
        <Avatar
          size={size}
          radius="full"
          fallback={
            <Gradient
              svgClassName={`rt-AvatarRoot rt-r-size-${size}`}
              address={address.value}
            />
          }
          {...avatar}
        />
        <Heading
          size="2"
          weight="light"
          mr="3"
          className="whitespace-nowrap"
          {...(address as HeadingProps)}
        >
          {displayAddress}
        </Heading>
      </Flex>
      <Icons icons={icons} address={address} />
    </Flex>
  );
};

export default Address;
