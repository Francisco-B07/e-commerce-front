import { useProducts } from "@/lib/hooks";
import { SecondaryButton } from "@/ui/button";
import { Card } from "@/ui/card";
import { Body } from "@/ui/texts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BuscadorForm,
  ContainerCard,
  ContainerForm,
  InputSearch,
  Root,
} from "./styled";

export function SearchPageComponent({ queryURL }: any) {
  const { register, handleSubmit, watch } = useForm();

  const [query, setQuery] = useState(queryURL);
  let queryWatch = watch("query");

  useEffect(() => {
    setQuery(queryWatch);
  }, [queryWatch]);

  const products = useProducts(query);
  return (
    <>
      <Root>
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
        <Body>
          {products?.pagination.totalInStock} resultados de{" "}
          {products?.pagination.total}
        </Body>
        <div>
          {products?.results.map((product: any) => (
            <ContainerCard key={product.objectID}>
              <Link
                href={`/products/${product.objectID}`}
                style={{ textDecorationLine: "none", color: "initial" }}
              >
                <Card
                  nombre={product.name}
                  precio={product.unitCost}
                  imageURL={product.imageURL}
                />
              </Link>
            </ContainerCard>
          ))}
        </div>
      </Root>
    </>
  );
}
