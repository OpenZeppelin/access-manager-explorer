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
  push: (entry: EntityInstance, at: number) => void;
  splice(start: number, deleteCount: number, ...items: string[]): void;
  splice(start: number, deleteCount?: number): void;
  clearAndPush: (entry: EntityInstance) => void;
}

const defaultContext: Context = {
  entities: [],
  push: () => {},
  splice: () => {},
  clearAndPush: () => {},
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

  const entities = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    const entityUrlSafeIds = params.getAll(SEARCH_PARAMS_KEY);
    return entityUrlSafeIds.map((id) => fromUrlSafeId(id as URLSafeId));
  }, [searchParams]);

  const push = (entity: EntityInstance, at?: number) => {
    if (at) splice(at + 1, entities.length - at + 1, toUrlSafeId(entity));
    else splice(entities.length, 0 + 1, toUrlSafeId(entity));
  };

  const splice = (start: number, deleteCount?: number, ...items: string[]) => {
    const params = new URLSearchParams(searchParams);
    const entityUrlSafeIds = searchParams.getAll(SEARCH_PARAMS_KEY);
    params.delete(SEARCH_PARAMS_KEY);
    if (deleteCount) entityUrlSafeIds.splice(start, deleteCount, ...items);
    else entityUrlSafeIds.splice(start);
    for (const id of entityUrlSafeIds) {
      params.append(SEARCH_PARAMS_KEY, id);
    }
    pushRoute(`${pathname}?${params.toString()}`);
  };

  const clearAndPush = (entity: EntityInstance) =>
    splice(0, entities.length + 1, toUrlSafeId(entity));

  return (
    <entitiesContext.Provider
      value={{
        entities,
        push,
        splice,
        clearAndPush,
      }}
    >
      {children}
    </entitiesContext.Provider>
  );
};

export { entitiesContext };
export default EntitiesProvider;
