"use client";
import { createContext, ReactNode, FC, useMemo } from "react";
import { AddressEntity, Entity } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

const SEARCH_PARAMS_KEY = "entities";

enum EntityPrefix {
  AccessManager = "mgr",
  AccessManaged = "mgd",
  AccessManagerRoleMember = "mbr",
  AccessManagerTarget = "tgt",
  AccessManagerTargetFunction = "fn",
  AccessManagerRole = "role",
  AccessManagerOperation = "op",
}

export type URLSafeId = `${EntityPrefix}-${string}`;

const fromUrlSafeId = (id: URLSafeId): EntityInstance => {
  const [prefix, rest] = id.split("-");

  return {
    type: fromPrefix(prefix as EntityPrefix),
    id: decodeURI(rest),
  };
};

const toUrlSafeId = (entity: EntityInstance): URLSafeId =>
  `${toPrefix(entity.type)}-${encodeURI(entity.id)}`;

const toPrefix = (type: EntityInstance["type"]): EntityPrefix => {
  switch (type) {
    case AddressEntity.AccessManager:
      return EntityPrefix.AccessManager;
    case AddressEntity.AccessManaged:
      return EntityPrefix.AccessManaged;
    case AddressEntity.AccessManagerRoleMember:
      return EntityPrefix.AccessManagerRoleMember;
    case AddressEntity.AccessManagerTarget:
      return EntityPrefix.AccessManagerTarget;
    case Entity.AccessManagerTargetFunction:
      return EntityPrefix.AccessManagerTargetFunction;
    case Entity.AccessManagerRole:
      return EntityPrefix.AccessManagerRole;
    case Entity.AccessManagerOperation:
      return EntityPrefix.AccessManagerOperation;
  }
};

const fromPrefix = (prefix: EntityPrefix): EntityInstance["type"] => {
  switch (prefix) {
    case EntityPrefix.AccessManager:
      return AddressEntity.AccessManager;
    case EntityPrefix.AccessManaged:
      return AddressEntity.AccessManaged;
    case EntityPrefix.AccessManagerRoleMember:
      return AddressEntity.AccessManagerRoleMember;
    case EntityPrefix.AccessManagerTarget:
      return AddressEntity.AccessManagerTarget;
    case EntityPrefix.AccessManagerTargetFunction:
      return Entity.AccessManagerTargetFunction;
    case EntityPrefix.AccessManagerRole:
      return Entity.AccessManagerRole;
    case EntityPrefix.AccessManagerOperation:
      return Entity.AccessManagerOperation;
  }
};

const EntitiesProvider: FC<Props> = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push: pushRoute } = useRouter();

  const push = (entity: EntityInstance) => {
    const params = new URLSearchParams(searchParams);
    params.append(SEARCH_PARAMS_KEY, toUrlSafeId(entity));
    pushRoute(`${pathname}?${params.toString()}`);
  };

  const remove = (at: number) => {
    const params = new URLSearchParams(searchParams);
    const entityUrlSafeIds = searchParams.getAll(SEARCH_PARAMS_KEY);
    params.delete(SEARCH_PARAMS_KEY);
    entityUrlSafeIds.splice(at, 1);
    for (const id of entityUrlSafeIds) {
      params.append(SEARCH_PARAMS_KEY, id);
    }
    pushRoute(`${pathname}?${params.toString()}`);
  };

  const clear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete(SEARCH_PARAMS_KEY);
    pushRoute(`${pathname}?${params.toString()}`);
  };

  const entities = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    const entityUrlSafeIds = params.getAll(SEARCH_PARAMS_KEY);
    return entityUrlSafeIds.map((id) => fromUrlSafeId(id as URLSafeId));
  }, [searchParams]);

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
