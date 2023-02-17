import { useSetToken } from "@/lib/hooks";
import router from "next/router";
export function LogoutComponent() {
  useSetToken("");
  if (true) {
    router.push("/");
  }

  return <></>;
}
