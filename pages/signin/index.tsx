import { LoginComponent } from "@/components/login";
import { Layout } from "@/components/layout";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>
      <Layout>
        <LoginComponent />
      </Layout>
      {/* <Product productId="rec5VMU6dKMt5Y7ls" /> */}
    </>
  );
}
