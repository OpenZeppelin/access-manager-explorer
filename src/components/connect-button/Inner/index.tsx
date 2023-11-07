import { cn } from "@/utils";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { ComponentProps, FC } from "react";
import { Address as AddressType } from "viem";
import Address from "@/components/address";

type ButtonProps = ComponentProps<typeof Button>;
type BoxProps = ComponentProps<typeof Box>;
type AddressProps = ComponentProps<typeof Address>;
type AddrethProps = Pick<Partial<AddressProps["addreth"]>, "address"> &
  Omit<AddressProps["addreth"], "address">;

type StateProps = {
  /**
   * Properties for the button when is not connected
   */
  connect?: Partial<ButtonProps>;
  /**
   * Properties for the button when is connected but not pointing to the correct network
   */
  wrongNetwork?: Partial<ButtonProps>;
  /**
   * Properties when is connected and pointing to the correct network
   */
  connected?: {
    // Chain button
    chain?: Partial<ButtonProps>;
    // Account button
    account?: Partial<ButtonProps>;
    address?: Omit<AddressProps, "addreth"> & {
      addreth: AddrethProps;
    };
  };
};

type Props = Parameters<
  Parameters<(typeof ConnectButton)["Custom"]>[0]["children"]
>[0] &
  BoxProps & {
    states?: StateProps;
  };

const Inner: FC<Props> = ({
  account,
  chain,
  mounted,
  authenticationStatus,
  openAccountModal,
  openChainModal,
  openConnectModal,
  accountModalOpen,
  chainModalOpen,
  connectModalOpen,
  states,
  ...props
}) => {
  const connected = mounted && account && chain;

  return (
    <Box
      {...props}
      {...(!mounted && {
        "aria-hidden": true,
        style: {
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none",
        },
      })}
    >
      {(() => {
        if (!connected) {
          return (
            <Button onClick={openConnectModal} {...states?.connect}>
              Connect
            </Button>
          );
        }

        if (chain.unsupported) {
          return (
            <Button onClick={openChainModal} {...states?.wrongNetwork}>
              Wrong network
            </Button>
          );
        }

        return (
          <Flex>
            <Button onClick={openChainModal} {...states?.connected?.chain}>
              {chain.hasIcon && chain.iconUrl && (
                <Image
                  width="16"
                  height="16"
                  alt={chain.name ?? "Chain icon"}
                  src={chain.iconUrl}
                />
              )}
              <Text size="1" className="whitespace-nowrap">
                {chain.name}
              </Text>
            </Button>
            <Button onClick={openAccountModal} {...states?.connected?.account}>
              <Address
                {...states?.connected?.address}
                addreth={{
                  actions: "none",
                  address: account.address as AddressType,
                  ...states?.connected?.address?.addreth,
                }}
                hidePopup
              />
              <Text size="1" className="whitespace-nowrap">
                {account.displayBalance ? ` (${account.displayBalance})` : ""}
              </Text>
              <div
                className={cn(
                  "animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent text-gray-600 rounded-full",
                  {
                    hidden: !account.hasPendingTransactions,
                  }
                )}
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </Button>
          </Flex>
        );
      })()}
    </Box>
  );
};

export default Inner;
