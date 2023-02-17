import { useGetToken, useProduct } from "@/lib/hooks";
import { ButtonComprar } from "@/ui/button";
import { Body, SubTitle, Title } from "@/ui/texts";
import { Container, ImageProduct, ProductInfo, Root, Spinner } from "./styled";
import { fetchAPI } from "lib/api";
import router from "next/router";
import { useState } from "react";

type productProp = {
  productId: string;
};

export function ProductPageComponent(props: productProp) {
  const dataProduct = useProduct(props.productId);
  const product = dataProduct?.product?.object;
  const token = useGetToken();
  const [comprar, setComprar] = useState(false);

  const urlOrden = "/order?productId=" + props.productId;

  async function handleComprar() {
    setComprar(true);
    if (token) {
      const mercadoPagoURL = await fetchAPI(urlOrden, {
        method: "POST",
        body: {},
      });
      router.push(mercadoPagoURL.url);
    } else {
      alert("Para poder comprar debes estar logueado!");
    }
  }

  return (
    <>
      <Root>
        <Container>
          <ImageProduct src={product?.imageURL} alt={product?.name} />
          <ProductInfo>
            <SubTitle>{product?.name}</SubTitle>
            <Title>${product?.unitCost}</Title>
            <ButtonComprar onClick={handleComprar}>
              Comprar {comprar && <Spinner />}
            </ButtonComprar>
            <Body>Descripción: {product?.description}</Body>
          </ProductInfo>
        </Container>
      </Root>
    </>
  );
}
