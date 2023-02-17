import { HomePageComponent } from "@/components/home-page";
import { Layout } from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reni</title>
      </Head>
      <Layout>
        <HomePageComponent></HomePageComponent>
      </Layout>
    </>
  );
}
