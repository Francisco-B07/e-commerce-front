import { Layout } from "@/components/layout";
import { LogoutComponent } from "@/components/logout";
import { useRemoveToken, useSetToken } from "@/lib/hooks";

export default function Logout() {
  return (
    <>
      <Layout>
        <LogoutComponent />
      </Layout>
    </>
  );
}
