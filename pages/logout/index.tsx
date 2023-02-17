import { saveToken } from "@/lib/api";
import router from "next/router";

export default function Logout() {
  saveToken("");
  router.push("/");
}
