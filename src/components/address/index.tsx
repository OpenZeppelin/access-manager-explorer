import { Avatar } from "@radix-ui/themes";
import { cn, truncateAddress } from "@/utils";
import { ComponentProps, FC, HTMLAttributes } from "react";
import Gradient from "./gradient";
import { Address } from "viem";

interface Props extends HTMLAttributes<HTMLDivElement> {
  address: Address;
  avatar: Omit<ComponentProps<typeof Avatar>, "fallback">;
  truncate: boolean;
}

const Address: FC<Props> = ({
  address,
  avatar,
  className,
  truncate,
  ...props
}) => {
  const displayAddress = truncate ? truncateAddress(address) : address;
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Avatar
        size={avatar.size}
        className="mr-2"
        radius="full"
        fallback={
          <Gradient
            svgClassName={`rt-AvatarRoot rt-r-size-${avatar.size}`}
            address={address}
          />
        }
        {...avatar}
      />
      <p className="text-sm font-light">{displayAddress}</p>
    </div>
  );
};

export default Address;
