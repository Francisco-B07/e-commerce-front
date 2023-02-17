import { Layout } from "@/components/layout";
import { LogoutComponent } from "@/components/logout";
import Head from "next/head";

export default function Logout() {
  return (
    <>
      <Head>
        <title>Logout</title>
      </Head>
      <Layout>
        <LogoutComponent />
      </Layout>
    </>
  );
}
