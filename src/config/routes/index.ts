import { EntityPrefix } from "@/types";

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
    ROOT: "/explorer",
    DETAILS: toNavigationId,
  },
};

export { toGraphId };
export default ROUTES;
