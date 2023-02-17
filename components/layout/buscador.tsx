import { SecondaryButton } from "@/ui/button";
import { BuscadorForm, ContainerForm, InputSearch } from "./styled";
import router from "next/router";
import { useForm } from "react-hook-form";

export function Buscador() {
  const { register, handleSubmit, watch } = useForm();

  function handleSearch(data: any) {
    router.push("/search?q=" + data.query);
  }

  return (
    <BuscadorForm onSubmit={handleSubmit(handleSearch)}>
      <ContainerForm>
        <InputSearch
          placeholder="Buscar..."
          {...register("query")}
        ></InputSearch>
        <SecondaryButton>Buscar</SecondaryButton>
      </ContainerForm>
    </BuscadorForm>
  );
}
