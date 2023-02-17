import styled from "styled-components";
import { Large, SubTitle } from "../texts";

type CardProps = {
  nombre?: string;
  precio?: number;
  imageURL: string;
};

const Container = styled.div`
  width: 315px;
  height: 321px;
  border: 4px solid #000000;
  border-radius: var(--border-radius);
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 237px;
  margin: 0px;
`;

export const FooterCard = styled.div`
  background: var(--fucsia);
  width: 100%;
  height: 77px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-around;
  margin-top: -5px;
  border-radius: 2px;
`;

export function Card(props: CardProps) {
  return (
    <Container>
      <ImageCard src={props.imageURL} alt={props.nombre} />
      <FooterCard>
        <Large>{props.nombre}</Large>
        <SubTitle>${props.precio}</SubTitle>
      </FooterCard>
    </Container>
  );
}
