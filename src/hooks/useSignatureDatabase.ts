import { join } from "path";
import { useCallback } from "react";
import useSWR from "swr";
import { Hex } from "viem";

interface UseSignaturesConfig {
  function?: Hex[];
  error?: Hex[];
  event?: Hex[];
  name?: string;
  all?: string;
}

interface Response {
  result: {
    ["function"]: { [key: Hex]: { name: string }[] };
    event: { [key: Hex]: { name: string }[] };
    error: { [key: Hex]: { name: string }[] };
  };
}

const useSignatures = (config: UseSignaturesConfig) => {
  const query = new URLSearchParams();
  for (const key in config) {
    const configEntry = config[key as keyof UseSignaturesConfig];
    if (Array.isArray(configEntry)) {
      for (const value of configEntry) {
        query.append(key, value);
      }
    } else if (configEntry) {
      query.append(key, configEntry);
    }
  }

  const response = useSWR<Response, string>(
    new URL(
      join("api", "v1", "signatures"),
      process.env.NEXT_PUBLIC_SIGNATURE_DATABASE!
    ) +
      "?" +
      query.toString(),
    (url: string) => fetch(url).then((res) => res.json())
  );

  const result = response?.data?.result;

  const functionWithFallback = useCallback(
    (selector: Hex) => result?.function?.[selector][0]?.name ?? selector,
    [result]
  );

  return {
    result,
    functionWithFallback,
    ...response,
  };
};

export { useSignatures };
