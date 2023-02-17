import { useSetToken } from "@/lib/hooks";
import router from "next/router";

export default function Logout() {
  useSetToken("");
  router.push("/");
  return (
    <>
      <div>Logout</div>
    </>
  );
}
