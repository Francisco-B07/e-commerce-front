import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/ui/button";
import { Input } from "@/ui/textfield";
import { Title } from "@/ui/texts";
import Link from "next/link";
import { SearchForm, Root, LogoReni } from "./styled";
import { useEffect, useState } from "react";

export function HomePageComponent() {
  const { register, handleSubmit, watch } = useForm();

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
    </Root>
  );
}
