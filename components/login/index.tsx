import { sendCode, getToken } from "@/lib/api";
import { useState } from "react";
import Router from "next/router";
import { Input } from "@/ui/textfield";
import { Body, SubTitle, Tiny } from "@/ui/texts";
import { SecondaryButton } from "@/ui/button";
import { Container, Root } from "./styled";
import { useForm } from "react-hook-form";

export function LoginComponent() {
  const { register, handleSubmit, watch } = useForm();
  const [email, setEmail] = useState("");

  async function HandleEmailForm(data: any) {
    const email = data.email;

    setEmail(email);
    sendCode(email);
  }

  async function HandleCodeForm(data: any) {
    const code = data.code;

    try {
      await getToken(email, code);
      Router.push("/profile");
    } catch (e) {
      console.error(e);
    }
  }

  const emailFormStyle = {
    display: email ? "none" : "",
  };
  const codeFormStyle = {
    display: email ? "" : "none",
  };

  return (
    <Root>
      <Container>
        <form onSubmit={handleSubmit(HandleEmailForm)} style={emailFormStyle}>
          <SubTitle>Ingresar</SubTitle>
          <label htmlFor="">
            <Tiny>Email</Tiny>
            <Input placeholder="email@gmail.com" {...register("email")} />
          </label>
          <SecondaryButton style={{ marginTop: "14px" }}>
            Continuar
          </SecondaryButton>
        </form>

        <form onSubmit={handleSubmit(HandleCodeForm)} style={codeFormStyle}>
          <SubTitle>Código</SubTitle>

          <Input placeholder="223344" {...register("code")} />
          <Body style={{ textAlign: "center" }}>
            Te envíamos un códigoa tu mail
          </Body>
          <SecondaryButton>Ingresar</SecondaryButton>
        </form>
      </Container>
    </Root>
  );
}
