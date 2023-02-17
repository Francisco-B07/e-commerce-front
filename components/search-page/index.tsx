import { useProducts } from "@/lib/hooks";
import { PrimaryButton } from "@/ui/button";
import { Card } from "@/ui/card";
import { ContainerCard, ContainerCards } from "@/ui/card-container";
import { Body, BodyBold } from "@/ui/texts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Root } from "./styled";

type SearchPageComponentProps = {
  query: string;
  page: number;
};

export function SearchPageComponent(props: SearchPageComponentProps) {
  const [page, setPage] = useState(0);
  const products = useProducts(props.query, page);

  useEffect(() => {
    setPage(0);
  }, [props.query]);

  const total = products?.pagination.total;

  const stylePagination = {
    display: total > 5 ? "flex" : "none",
    justifyContent: "space-between",
    marginBottom: "50px",
  };
  const styleAnterior = {
    background: page < 1 ? "#d2f3fa" : "",
    margin: "0px 10px",
  };
  const styleSiguiente = {
    background: page < total / 5 - 1 ? "" : "#d2f3fa",
    margin: "0px 10px",
  };

  function handleSiguente() {
    if (page < total / 5 - 1) {
      const newPage = page + 1;
      setPage(newPage);
    }
  }
  function handleAnterior() {
    if (page > 0) {
      const newPage = page - 1;
      setPage(newPage);
    }
  }

  return (
    <>
      <Root>
        <Body>
          {products?.pagination.totalInStock} resultados de {total}
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
        <div style={stylePagination}>
          <PrimaryButton style={styleAnterior} onClick={handleAnterior}>
            Anterior
          </PrimaryButton>
          <BodyBold
            style={{
              marginTop: "10px",
              minWidth: "75px",
              textAlign: "center",
              color: "var(--azul)",
            }}
          >
            Página {page + 1}
          </BodyBold>
          <PrimaryButton style={styleSiguiente} onClick={handleSiguente}>
            Siguiente
          </PrimaryButton>
        </div>
      </Root>
    </>
  );
}
