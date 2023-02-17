import { useSetToken } from "@/lib/hooks";
import router from "next/router";
export function LogoutComponent() {
  useSetToken("");
  router.push("/");
  return <></>;
}
