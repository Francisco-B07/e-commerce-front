import { Layout } from "components/layout";
import { ProductPageComponent } from "@/components/product-page";
import { useRouter } from "next/router";
import { LayoutWithBuscador } from "@/components/layout/layout-with-buscador";

export default function LoginPage() {
  const router = useRouter();
  let productId = router.query.id as any;
  return (
    <>
      <LayoutWithBuscador>
        <ProductPageComponent productId={productId} />
      </LayoutWithBuscador>
    </>
  );
}
