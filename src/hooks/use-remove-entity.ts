import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useRemoveEntity = (depth: number) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  return useCallback(() => {
    const [_, explorer, ...items] = pathname.split("/");
    items.splice(depth, 1);
    replace([_, explorer, ...items].join("/"));
  }, [depth, replace]);
};

export default useRemoveEntity;
