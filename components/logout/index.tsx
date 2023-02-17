import { useGetToken, useSetToken } from "@/lib/hooks";
export function LogoutComponent() {
  const token = useGetToken();
  useSetToken("");

  return <></>;
}
