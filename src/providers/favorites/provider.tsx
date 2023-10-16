"use client";
import { useState, createContext, ReactNode, FC, useEffect } from "react";
import { AddressEntity, Entity } from "@/types";
import Address from "@/components/address";

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

export type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

const FAVORITES_KEY = "favorites";

interface Context extends Favorites {
  setFavorite: (entry: Entry<Favorites>) => void;
  isFavorite: (kind: Kind, displayName: DisplayName) => boolean;
  removeFavorite: (kind: Kind, displayName: DisplayName) => void;
  getFavorites: (kind: Kind) => Entry<Favorites[Kind]>[];
}

const defaultContext = {
  [AddressEntity.AccessManager]: {},
  [AddressEntity.AccessManaged]: {},
  [AddressEntity.AccessManagerTarget]: {},
  [AddressEntity.AccessManagerRoleMember]: {},
  [Entity.AccessManagerTargetFunction]: {},
  [Entity.AccessManagerRole]: {},
  [Entity.AccessManagerOperation]: {},
};

const favoritesContext = createContext<Context>({
  setFavorite: () => {},
  isFavorite: () => false,
  removeFavorite: () => {},
  getFavorites: () => [],
  ...defaultContext,
});

const FavoritesProvider: FC<Props> = ({ children }) => {
  const [rendered, setRendered] = useState(false);
  const [favorites, setFavorites] = useState<Favorites>(defaultContext);

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
      [kind]: {
        ...favorites[kind],
        ...entry[1],
      },
    };
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const isFavorite = (kind: Kind, displayName: DisplayName) => {
    return !!favorites[kind]?.[displayName];
  };

  const removeFavorite = (kind: Kind, displayName: DisplayName) => {
    const newFavoritesKind = { ...favorites[kind] };
    const newFavorites = {
      ...favorites,
      [kind]: { ...newFavoritesKind },
    };
    delete newFavorites[kind][displayName];
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const getFavorites = (kind: Kind) => {
    const favoritesKind = favorites[kind];
    return Object.entries(favoritesKind ?? {});
  };

  return (
    <favoritesContext.Provider
      value={{
        ...favorites,
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
