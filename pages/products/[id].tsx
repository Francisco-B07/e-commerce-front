import { Layout } from "components/layout";
import { ProductPageComponent } from "@/components/product-page";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  let productId = router.query.id as any;
  return (
    <>
      <Layout>
        <ProductPageComponent productId={productId} />
      </Layout>
    </>
  );
}
