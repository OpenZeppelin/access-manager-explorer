const urqlEndpoint = {
  sepolia: process.env.NEXT_PUBLIC_URQL_ENDPOINT_SEPOLIA!,
  goerli: process.env.NEXT_PUBLIC_URQL_ENDPOINT_GOERLI!,
  mainnet: process.env.NEXT_PUBLIC_URQL_ENDPOINT_MAINNET!,
};

const walletConnectcId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;
const env = {
  production: process.env.NODE_ENV === "production",
  development: process.env.NODE_ENV === "development",
};

const signatureDatabase = process.env.NEXT_PUBLIC_SIGNATURE_DATABASE!;

const gaId = process.env.NEXT_PUBLIC_GA_ID!;
if (env.production) {
  if (!gaId) {
    throw new Error("Missing GA_ID");
  }
}

export { urqlEndpoint, walletConnectcId, signatureDatabase, env, gaId };
