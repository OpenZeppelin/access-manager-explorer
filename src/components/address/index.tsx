import { Avatar, Flex, Heading, IconButton } from "@radix-ui/themes";
import { truncateAddress } from "@/utils";
import { ComponentProps, FC } from "react";
import Gradient from "./gradient";
import { Address } from "viem";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type AvatarProps = ComponentProps<typeof Avatar>;
type HeadingProps = ComponentProps<typeof Heading>;
type FlexProps = ComponentProps<typeof Flex>;
type IconButtonProps = ComponentProps<typeof IconButton>;

interface AddressProps extends Partial<Omit<HeadingProps, "value">> {
  value: Address;
}

interface LinkProps {
  etherscan?: IconButtonProps | boolean;
}

interface Props extends FlexProps {
  address: AddressProps;
  avatar?: Partial<Omit<AvatarProps, "fallback">>;
  truncate?: Parameters<typeof truncateAddress>[1] | boolean;
  links?: LinkProps;
}

const DEFAULT_SIZE = "1";

const Address: FC<Props> = ({ address, avatar, truncate, links, ...props }) => {
  const displayAddress = !!truncate
    ? truncateAddress(address.value, truncate === true ? undefined : truncate)
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
      <Heading size="2" weight="light" mr="3" {...(address as HeadingProps)}>
        {displayAddress}
      </Heading>
      {links && (
        <IconButton
          variant="ghost"
          color="gray"
          size="1"
          {...(links?.etherscan == true ? {} : links.etherscan)}
        >
          <ExternalLinkIcon width="13" height="13" />
          <span className="sr-only">Etherscan</span>
        </IconButton>
      )}
    </Flex>
  );
};

export default Address;
