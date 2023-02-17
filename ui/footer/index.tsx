import { Body, Large } from "@/ui/texts";
import Link from "next/link";
import { ContainerLinks, FooterContainer } from "./styled";

export function Footer() {
  return (
    <FooterContainer>
      <ContainerLinks>
        <div>
          <Link href="/signin" style={{ textDecorationLine: "none" }}>
            <Body style={{ color: "var(--blanco)" }}>Ingresar</Body>
          </Link>
          <Link href="/profile" style={{ textDecorationLine: "none" }}>
            <Body style={{ color: "var(--blanco)" }}>Mi Perfil</Body>
          </Link>
          <Link href="/search?q=" style={{ textDecorationLine: "none" }}>
            <Body style={{ color: "var(--blanco)" }}>Buscar</Body>
          </Link>
          <Link href="/logout" style={{ textDecorationLine: "none" }}>
            <Body style={{ color: "var(--blanco)" }}>Logout</Body>
          </Link>
        </div>
        <div>
          <Large style={{ color: "var(--blanco)" }}>Redes</Large>
          <Link
            href="https://www.instagram.com/reni_accesorio/"
            style={{ color: "var(--blanco)", textDecorationLine: "none" }}
          >
            <Body>Instagram</Body>
          </Link>
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
      </ContainerLinks>

      <Body style={{ color: "var(--blanco)" }}>©2023 The Panch</Body>
    </FooterContainer>
  );
}
