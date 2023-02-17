import styled from "styled-components";
import { BodyBold } from "ui/texts";
import css from "./index.module.css";

export const Button = styled(BodyBold).attrs({
  as: "button",
})`
  width: 100%;
  height: 37px;
  color: var(--blanco);
  border: none;
  border-radius: var(--border-radius);
`;

export const PrimaryButton = styled(Button)`
  background: var(--azul);
`;

export const ButtonComprar = styled(Button)`
  background: var(--celeste);
  color: var(--negro);
  height: 63px;
  font-size: 32px;
`;

export const SecondaryButton = styled(Button)`
  background: var(--naranja);
  color: var(--negro);
`;

export const LoginButton = styled(Button)`
  background: var(--fucsia);
`;

export function BurguerButtons({ clicked, handleClick }: any) {
  return (
    <div
      onClick={handleClick}
      className={`${css.burguer} ${clicked ? css.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
