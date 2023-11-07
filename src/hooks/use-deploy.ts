import { useWalletClient } from "wagmi";
import AccessManager from "@openzeppelin/contracts/build/contracts/AccessManager.json";
import { Abi, Address, Hex } from "viem";
import { useCallback } from "react";

const useDeploy = (account?: Address) => {
  const { data: walletClient, ...client } = useWalletClient();

  const manager = useCallback(
    (initialAdmin?: Address) => {
      const abi = AccessManager.abi as Abi;
      const bytecode = AccessManager.bytecode as Hex;
      return walletClient?.deployContract({
        abi,
        account,
        args: [initialAdmin],
        bytecode,
      });
    },
    [walletClient, account]
  );

  return {
    client,
    manager,
  };
};

export default useDeploy;
