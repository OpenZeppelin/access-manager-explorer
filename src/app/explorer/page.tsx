import ROUTES from "@/config/routes";
import { redirect } from "next/navigation";

const Explorer = () => {
  redirect(ROUTES.EXPLORER.ROOT(1));
};

export default Explorer;
