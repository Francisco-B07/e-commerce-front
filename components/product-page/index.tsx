import { useProduct } from "@/lib/hooks";
import { ButtonComprar } from "@/ui/button";
import { Body, SubTitle, Title } from "@/ui/texts";
import { Container, ImageProduct, ProductInfo, Root } from "./styled";
import { fetchAPI } from "lib/api";
import router from "next/router";

type productProp = {
  productId: string;
};

export function ProductPageComponent(props: productProp) {
  const dataProduct = useProduct(props.productId);
  const product = dataProduct?.product?.object;

  const urlOrden = "order?productId=" + props.productId;

  async function handleComprar() {
    const mercadoPagoURL = await fetchAPI(urlOrden, {
      method: "POST",
    });
    router.push(mercadoPagoURL);
  }

  return (
    <>
      <Root>
        <Container>
          <ImageProduct src={product?.imageURL} alt={product?.name} />
          <ProductInfo>
            <SubTitle>{product?.name}</SubTitle>
            <Title>${product?.unitCost}</Title>
            <ButtonComprar onClick={handleComprar}>Comprar</ButtonComprar>
            <Body>Descripción: {product?.description}</Body>
          </ProductInfo>
        </Container>
      </Root>
    </>
  );
}
