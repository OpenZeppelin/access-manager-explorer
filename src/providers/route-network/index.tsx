import { useContext } from "react";
import RouteNetworkProvider, { routeNetworkContext } from "./provider";

const useRouteNetwork = () => useContext(routeNetworkContext);

export { useRouteNetwork, RouteNetworkProvider };
