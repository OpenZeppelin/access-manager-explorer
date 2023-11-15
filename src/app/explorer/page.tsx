import ROUTES from "@/config/routes";
import { redirect } from "next/navigation";

const Explorer = () => {
  redirect(ROUTES.EXPLORER.ROOT(5));
};

export default Explorer;
