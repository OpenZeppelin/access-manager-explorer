import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: process.env.NEXT_PUBLIC_URQL_ENDPOINT!,
  exchanges: [cacheExchange, fetchExchange],
});

export { client };
