import { useProducts } from "@/lib/hooks";
import { Card } from "@/ui/card";
import { ContainerCard, ContainerCards } from "@/ui/card-container";
import { Body } from "@/ui/texts";
import Link from "next/link";
import { Root } from "./styled";

type SearchPageComponentProps = {
  query: string;
};

export function SearchPageComponent(props: SearchPageComponentProps) {
  const products = useProducts(props.query);
  return (
    <>
      <Root>
        <Body>
          {products?.pagination.totalInStock} resultados de{" "}
          {products?.pagination.total}
        </Body>
        <ContainerCards>
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
        </ContainerCards>
      </Root>
    </>
  );
}
