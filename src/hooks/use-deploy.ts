import { useWalletClient } from "wagmi";
import AccessManager from "@openzeppelin/contracts/build/contracts/AccessManager.json";
import { Abi, Address, Hex } from "viem";

const useDeploy = (account?: Address) => {
  const { data: walletClient, ...client } = useWalletClient();

  return {
    client,
    manager: (initialAdmin?: Address) => {
      const abi = AccessManager.abi as Abi;
      const bytecode = AccessManager.bytecode as Hex;
      return walletClient?.deployContract({
        abi,
        account,
        args: [initialAdmin],
        bytecode,
      });
    },
  };
};

export default useDeploy;
