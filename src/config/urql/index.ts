import { cacheExchange } from "@urql/exchange-graphcache";
import { Client, fetchExchange } from "urql";
import { SupportedChain } from "@/types";

const CACHED_CLIENTS: Record<number, Client> = {};

const getUrqlClient = (chain: SupportedChain) => {
  if (!CACHED_CLIENTS[chain.definition.id]) {
    CACHED_CLIENTS[chain.definition.id] = new Client({
      url: chain.subgraphUrl,
      exchanges: [cacheExchange(), fetchExchange],
    });
  }
  return CACHED_CLIENTS[chain.definition.id];
};

export { getUrqlClient };
