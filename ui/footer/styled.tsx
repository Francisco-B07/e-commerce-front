import styled from "styled-components";

export const FooterContainer = styled.div`
  background: var(--negro);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 32px;
  @media (min-width: 1280px) {
    height: 60vh;
    padding: 32px 80px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;
