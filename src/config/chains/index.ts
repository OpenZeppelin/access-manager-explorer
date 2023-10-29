import { goerli, mainnet, sepolia } from "viem/chains";

const chains = [
  {
    definition: goerli,
    subgraphUrl: process.env.NEXT_PUBLIC_URQL_ENDPOINT_GOERLI!,
  },
  {
    definition: mainnet,
    subgraphUrl: process.env.NEXT_PUBLIC_URQL_ENDPOINT_MAINNET!,
  },
  {
    definition: sepolia,
    subgraphUrl: process.env.NEXT_PUBLIC_URQL_ENDPOINT_SEPOLIA!,
  },
] as const;

export { chains };
