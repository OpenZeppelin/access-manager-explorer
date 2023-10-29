import { useContext } from "react";
import EntitiesProvider, { entitiesContext } from "./provider";

const useEntities = () => useContext(entitiesContext);

export { useEntities, EntitiesProvider };
