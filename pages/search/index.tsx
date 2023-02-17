import { HomePageComponent } from "@/components/home-page";
import { Layout } from "@/components/layout";
import { SearchPageComponent } from "@/components/search-page";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const query = router.query.q as any;
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Layout>
        <SearchPageComponent queryURL={query} />
      </Layout>
    </>
  );
}
