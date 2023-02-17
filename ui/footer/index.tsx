import { Body, Large } from "@/ui/texts";
import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: var(--negro);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 32px;
`;

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <Body style={{ color: "var(--blanco)" }}>Ingresar</Body>
        <Body style={{ color: "var(--blanco)" }}>Mi Perfil</Body>
        <Body style={{ color: "var(--blanco)" }}>Buscar</Body>
        <Body style={{ color: "var(--blanco)" }}>Logout</Body>
      </div>
      <div>
        <Large style={{ color: "var(--blanco)" }}>Redes</Large>
        <Link
          href="https://www.linkedin.com/in/francisco-burgoa-0b3422227/"
          style={{ color: "var(--blanco)", textDecorationLine: "none" }}
        >
          <Body>LinkedIn</Body>
        </Link>

        <Link
          href="https://portfolio-burgoa-francisco.vercel.app/"
          style={{ color: "var(--blanco)", textDecorationLine: "none" }}
        >
          <Body>Portfolio</Body>
        </Link>
      </div>
      <Body style={{ color: "var(--blanco)" }}>©2023 The Panch</Body>
    </FooterContainer>
  );
}
