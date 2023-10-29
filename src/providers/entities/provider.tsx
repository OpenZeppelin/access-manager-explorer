"use client";
import { createContext, ReactNode, FC, useEffect, useState } from "react";
import { AddressEntity, Entity } from "@/types";
import { useSearchParams } from "next/navigation";

interface Props {
  children: ReactNode;
}

export interface EntityInstance {
  type: AddressEntity | Entity;
  id: string;
}

interface Context {
  entities: EntityInstance[];
  push: (entry: EntityInstance) => void;
  remove: (at: number) => void;
  clear: () => void;
}

const defaultContext: Context = {
  entities: [],
  push: () => {},
  remove: () => {},
  clear: () => {},
};

const entitiesContext = createContext<Context>(defaultContext);

const EntitiesProvider: FC<Props> = ({ children }) => {
  const [entities, setEntities] = useState<EntityInstance[]>([]);

  const push = (entity: EntityInstance) =>
    setEntities((prev) => [...prev, entity]);

  const remove = (at: number) =>
    setEntities((prev) => {
      prev.splice(at, 1);
      return [...prev];
    });

  const clear = () => setEntities([]);

  useEffect(() => {
    console.log(entities);
  }, [entities]);

  return (
    <entitiesContext.Provider
      value={{
        entities,
        push,
        remove,
        clear,
      }}
    >
      {children}
    </entitiesContext.Provider>
  );
};

export { entitiesContext };
export default EntitiesProvider;
