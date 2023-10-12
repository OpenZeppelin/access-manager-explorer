"use client";
import { useEffect, useRef, useState } from "react";
import { useAccount as defaultUseAccount } from "wagmi";

const useAccount = (config?: Parameters<typeof defaultUseAccount>[0]) => {
  const ref = useRef();
  const {
    address,
    connector,
    isConnected,
    isConnecting,
    isDisconnected,
    isReconnecting,
    status,
  } = defaultUseAccount(config);

  const [rendered, setRendered] = useState(false);

  useEffect(() => setRendered(true), []);

  return rendered
    ? {
        address,
        connector,
        isConnected,
        isConnecting,
        isDisconnected,
        isReconnecting,
        status,
      }
    : {};
};

export default useAccount;
