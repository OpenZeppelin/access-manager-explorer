import { EntityPrefix, SupportedChainId } from "@/types";
import { join } from "path";

const toGraphId = (id: string) => {
  const [type, ...rest] = id.split("-");

  return {
    type,
    id: rest.join("/"),
  };
};

const toNavigationId = (prefix: EntityPrefix, id: string) =>
  `${prefix}-${id.replace(/\//g, "-")}`;

const ROUTES = {
  EXPLORER: {
    ROOT: (network: SupportedChainId) => join("/explorer", network.toString()),
    DETAILS: toNavigationId,
  },
};

export { toGraphId };
export default ROUTES;
