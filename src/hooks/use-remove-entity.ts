import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useRemoveEntity = (depth: number) => {
  const pathname = usePathname();
  const { push } = useRouter();

  return useCallback(() => {
    const [_, explorer, ...items] = pathname.split("/");
    items.splice(depth, 1);
    push([_, explorer, ...items].join("/"));
  }, [depth, push]);
};

export default useRemoveEntity;
