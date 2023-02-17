import { useProduct } from "@/lib/hooks";
import { ButtonComprar, SecondaryButton } from "@/ui/button";
import { ImageCard } from "@/ui/card";
import { Body, SubTitle, Title } from "@/ui/texts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BuscadorForm,
  Container,
  ContainerForm,
  InputSearch,
  Root,
} from "./styled";

type productProp = {
  productId: string;
};

export function ProductPageComponent(props: productProp) {
  const dataProduct = useProduct(props.productId);
  const product = dataProduct?.product?.object;

  const { register, handleSubmit, watch } = useForm();
  console.log(dataProduct);

  const [query, setQuery] = useState("");
  let queryWatch = watch("query");

  useEffect(() => {
    setQuery(queryWatch);
  }, [queryWatch]);

  return (
    <>
      <BuscadorForm>
        <ContainerForm>
          <InputSearch
            defaultValue={query}
            placeholder="Buscar..."
            {...register("query")}
          ></InputSearch>
          <Link href={`/search?q=${query}`}>
            <SecondaryButton>Buscar</SecondaryButton>
          </Link>
        </ContainerForm>
      </BuscadorForm>
      <Root>
        <Container>
          <ImageCard src={product?.imageURL} alt={product?.name} />
          <SubTitle>{product?.name}</SubTitle>
          <Title>${product?.unitCost}</Title>
          <ButtonComprar>Comprar</ButtonComprar>
          <Body>Descripción: {product?.description}</Body>
          {/* <div>Product Data: {JSON.stringify(dataProduct)}</div> */}
        </Container>
      </Root>
    </>
  );
}
