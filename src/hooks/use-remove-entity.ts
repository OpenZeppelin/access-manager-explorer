import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useRemoveEntity = (depth: number) => {
  const pathname = usePathname();
  const { push } = useRouter();

  return useCallback(() => {
    const [_, explorer, chainId, ...items] = pathname.split("/");
    items.splice(depth, 1);
    push([_, explorer, chainId, ...items].join("/"));
  }, [depth, pathname, push]);
};

export default useRemoveEntity;
