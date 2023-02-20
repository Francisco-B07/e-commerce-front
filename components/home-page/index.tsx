import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/ui/button";
import { Input } from "@/ui/textfield";
import { Large, SubTitle, Title } from "@/ui/texts";
import Link from "next/link";
import { SearchForm, Root, LogoReni } from "./styled";
import { useEffect, useState } from "react";
import { Card } from "@/ui/card";
import { useProducts } from "@/lib/hooks";
import { ContainerCard, ContainerCards } from "@/ui/card-container";

export function HomePageComponent() {
  const { register, handleSubmit, watch } = useForm();
  const products = useProducts("", 0);

  const [query, setQuery] = useState("");
  let queryWatch = watch("query");

  useEffect(() => {
    setQuery(queryWatch);
  }, [queryWatch]);

  return (
    <Root>
      <Title style={{ textAlign: "center" }}>
        RENI <br /> e-commerce
      </Title>
      <SearchForm>
        <Input
          placeholder="Encontrá tu producto ideal"
          {...register("query")}
        />
        <Link href={`/search?q=${query}`}>
          <PrimaryButton>Buscar</PrimaryButton>
        </Link>
      </SearchForm>
      <Link href="https://www.instagram.com/reni_accesorio/">
        <LogoReni
          src="https://res.cloudinary.com/dmvdh3kam/image/upload/v1676564102/IMG_20220724_192833_208_jqzrrb.jpg"
          alt="Logo RENI"
        />
      </Link>
      <SubTitle style={{ textAlign: "center" }}>Productos destacados</SubTitle>
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
      <Link
        href={`/search?q=`}
        style={{
          textDecorationLine: "none",
          color: "var(--azul)",
          marginBottom: "30px",
        }}
      >
        <Large> ver más {">>"} </Large>
      </Link>
    </Root>
  );
}
