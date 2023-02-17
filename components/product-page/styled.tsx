// import { TextField } from "@/ui/textfield";
import { Input } from "@/ui/textfield";
import styled from "styled-components";

export const Root = styled.div`
  min-height: 88vh;
  max-width: 100%;
  padding: 66px 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 457px;
`;

export const BuscadorForm = styled.form`
  margin-top: -1px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  background: var(--negro);
`;

export const ContainerForm = styled.div`
  max-width: 450px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputSearch = styled(Input)`
  background: var(--negro);
  color: var(--blanco);
  border: 3px solid var(--blanco);
`;
