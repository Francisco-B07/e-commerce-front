import { useProduct } from "@/lib/hooks";
import { ButtonComprar } from "@/ui/button";
import { ImageCard } from "@/ui/card";
import { Body, SubTitle, Title } from "@/ui/texts";
import { Container, ImageProduct, ProductInfo, Root } from "./styled";

type productProp = {
  productId: string;
};

export function ProductPageComponent(props: productProp) {
  const dataProduct = useProduct(props.productId);
  const product = dataProduct?.product?.object;

  return (
    <>
      <Root>
        <Container>
          <ImageProduct src={product?.imageURL} alt={product?.name} />
          <ProductInfo>
            <SubTitle>{product?.name}</SubTitle>
            <Title>${product?.unitCost}</Title>
            <ButtonComprar>Comprar</ButtonComprar>
            <Body>Descripción: {product?.description}</Body>
          </ProductInfo>
        </Container>
      </Root>
    </>
  );
}
