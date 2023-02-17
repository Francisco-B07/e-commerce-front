import { ProfileComponent } from "@/components/profile";
import { Layout } from "components/layout";
import Head from "next/head";

export default function UsersPage() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout>
        <ProfileComponent />
      </Layout>
    </>
  );
}
