import { useContext } from "react";
import FavoritesProvider, { favoritesContext } from "./provider";

const useFavorites = () => useContext(favoritesContext);

export { useFavorites, FavoritesProvider };
