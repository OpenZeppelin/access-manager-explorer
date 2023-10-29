import { SupportedChainId } from "@/types";
import { join } from "path";

const ROUTES = {
  EXPLORER: {
    ROOT: (network: SupportedChainId) => join("/explorer", network.toString()),
  },
};

export default ROUTES;
