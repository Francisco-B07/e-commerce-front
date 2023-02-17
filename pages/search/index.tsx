import { LayoutWithBuscador } from "@/components/layout/layout-with-buscador";
import { SearchPageComponent } from "@/components/search-page";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const query = router.query.q as any;
  const page = 0;
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <LayoutWithBuscador>
        <SearchPageComponent query={query} page={page} />
      </LayoutWithBuscador>
    </>
  );
}
