"use client";
import { ConnectButton as RainbowKitConnectButton } from "@rainbow-me/rainbowkit";
import Inner from "./Inner";
import { ComponentProps, FC } from "react";

const ConnectButton: FC<Partial<ComponentProps<typeof Inner>>> = (props) => {
  return (
    <RainbowKitConnectButton.Custom>
      {(innerProps) => <Inner {...innerProps} {...props} />}
    </RainbowKitConnectButton.Custom>
  );
};

export default ConnectButton;
