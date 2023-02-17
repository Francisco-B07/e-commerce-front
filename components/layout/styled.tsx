import { LoginButton } from "@/ui/button";
import { Input } from "@/ui/textfield";
import { SubTitle } from "@/ui/texts";
import styled from "styled-components";

export const BuscadorForm = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  background: var(--negro);
  @media (min-width: 1280px) {
    flex-direction: row;
    max-height: 40px;
    padding: 0px;
    width: 600px;
  }
`;

export const ContainerForm = styled.div`
  max-width: 450px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const InputSearch = styled(Input)`
  background: var(--negro);
  color: var(--blanco);
  border: 3px solid var(--blanco);
  @media (min-width: 1280px) {
    width: 580px;
    margin-right: 10px;
  }
`;

export const LoginButtonHeader = styled(LoginButton)`
  width: 172px;
  @media (max-width: 1280px) {
    display: none;
  }
`;
