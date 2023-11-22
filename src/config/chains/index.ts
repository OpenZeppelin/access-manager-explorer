import { goerli, mainnet, sepolia } from "viem/chains";
import { urqlEndpoint } from "../env";

const chains = [
  {
    definition: goerli,
    subgraphUrl: urqlEndpoint.goerli,
  },
  {
    definition: mainnet,
    subgraphUrl: urqlEndpoint.mainnet,
  },
  {
    definition: sepolia,
    subgraphUrl: urqlEndpoint.sepolia,
  },
] as const;

export { chains };
