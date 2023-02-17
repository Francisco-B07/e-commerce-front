import { useMe } from "@/lib/hooks";
import { SecondaryButton } from "@/ui/button";
import { Input } from "@/ui/textfield";
import { SubTitle, Tiny } from "@/ui/texts";
import { useForm } from "react-hook-form";
import { Container, Root } from "./styled";

type productProp = {
  productId: string;
};

export function ProfileComponent() {
  const { register, handleSubmit, watch } = useForm();
  const user = useMe();
  console.log(user);

  function handleForm(data: any) {}

  return (
    <>
      <Root>
        <Container>
          <form onSubmit={handleSubmit(handleForm)}>
            <SubTitle>Perfil</SubTitle>
            <Tiny style={{ margin: "15px 0 4px 0" }}>Nombre Completo</Tiny>
            <Input {...register("name")} defaultValue={user.name} />
            <Tiny style={{ margin: "15px 0 4px 0" }}>Dirección</Tiny>
            <Input {...register("address")} defaultValue={user.address} />
            <Tiny style={{ margin: "15px 0 4px 0" }}>Teléfono</Tiny>
            <Input {...register("telefono")} defaultValue={user.telefono} />
            <SecondaryButton style={{ marginTop: "34px" }}>
              Guardar
            </SecondaryButton>
          </form>
        </Container>
      </Root>
    </>
  );
}