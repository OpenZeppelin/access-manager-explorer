"use client";
import {
  useState,
  createContext,
  ReactNode,
  FC,
  useEffect,
  useCallback,
} from "react";
import { AddressEntity, Entity, SupportedChainId } from "@/types";
import { useRouteNetwork } from "../route-network";

import { chains as supportedChains } from "@/config/chains";
import { Address } from "viem";

interface Props {
  children: ReactNode;
}

export type Kind = AddressEntity | Entity;

type DisplayName = string;

type ID = string;

export interface Favorites {
  [AddressEntity.AccessManager]: Record<DisplayName, Address>;
  [AddressEntity.AccessManaged]: Record<DisplayName, Address>;
  [AddressEntity.AccessManagerTarget]: Record<DisplayName, ID>;
  [AddressEntity.AccessManagerRoleMember]: Record<DisplayName, ID>;
  [Entity.AccessManagerTargetFunction]: Record<DisplayName, ID>;
  [Entity.AccessManagerRole]: Record<DisplayName, ID>;
  [Entity.AccessManagerOperation]: Record<DisplayName, ID>;
}

type SupportedChainIdFavorites = {
  [key in SupportedChainId]?: Favorites;
};

export type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

const FAVORITES_KEY = "favorites";

interface Context extends SupportedChainIdFavorites {
  setFavorite: (entry: Entry<Favorites>) => void;
  isFavorite: (kind: Kind, displayName: DisplayName) => boolean;
  removeFavorite: (kind: Kind, displayName: DisplayName) => void;
  getFavorites: (kind: Kind) => Entry<Favorites[Kind]>[];
}

const defaultContext: Omit<
  Context,
  "setFavorite" | "isFavorite" | "removeFavorite" | "getFavorites"
> = supportedChains.reduce(
  (acc, chain) =>
    Object.assign(acc, {
      [chain.definition.id]: {
        [AddressEntity.AccessManager]: {},
        [AddressEntity.AccessManaged]: {},
        [AddressEntity.AccessManagerTarget]: {},
        [AddressEntity.AccessManagerRoleMember]: {},
        [Entity.AccessManagerTargetFunction]: {},
        [Entity.AccessManagerRole]: {},
        [Entity.AccessManagerOperation]: {},
      },
    }),
  {}
);

const favoritesContext = createContext<Context>({
  setFavorite: () => {},
  isFavorite: () => false,
  removeFavorite: () => {},
  getFavorites: () => [],
  ...defaultContext,
});

const FavoritesProvider: FC<Props> = ({ children }) => {
  const [rendered, setRendered] = useState(false);
  const [favorites, setFavorites] =
    useState<SupportedChainIdFavorites>(defaultContext);
  const { currentChainId } = useRouteNetwork();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!rendered) {
      setFavorites(
        JSON.parse(window.localStorage.getItem(FAVORITES_KEY) || "{}")
      );
      setRendered(true);
    }
  }, [typeof window]);

  const setFavorite = (entry: Entry<Favorites>) => {
    const kind = entry[0];
    const newFavorites = {
      ...favorites,
      [currentChainId]: {
        ...favorites[currentChainId],
        [kind]: {
          ...favorites[currentChainId]?.[kind],
          ...entry[1],
        },
      },
    };
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const isFavorite = useCallback(
    (kind: Kind, displayName: DisplayName) => {
      return !!favorites[currentChainId]?.[kind]?.[displayName];
    },
    [favorites, currentChainId]
  );

  const removeFavorite = (kind: Kind, displayName: DisplayName) => {
    const newFavorites = {
      ...favorites,
      [currentChainId]: {
        ...favorites[currentChainId],
        [kind]: { ...favorites[currentChainId]?.[kind] },
      },
    };
    delete newFavorites[currentChainId]?.[kind][displayName];
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const getFavorites = useCallback(
    (kind: Kind) => {
      const favoritesKind = favorites[currentChainId]?.[kind];
      return Object.entries(favoritesKind ?? {});
    },
    [favorites, currentChainId]
  );

  return (
    <favoritesContext.Provider
      value={{
        ...favorites[currentChainId],
        isFavorite,
        setFavorite,
        removeFavorite,
        getFavorites,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export { favoritesContext };
export default FavoritesProvider;
