import styled from "styled-components";

export const ContainerCard = styled.div`
  margin-bottom: 53px;
`;

export const ContainerCards = styled.div`
  display: grid;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }
`;
