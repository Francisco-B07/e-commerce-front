import { Layout } from "@/components/layout";
import { PrimaryButton } from "@/ui/button";
import { SubTitle } from "@/ui/texts";
import Link from "next/link";
import styled from "styled-components";

export const Root = styled.div`
  min-height: 80vh;
  width: 100%;
  padding: 28px 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
export const Container = styled.div`
  min-height: 200px;
  max-width: 457px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Thanks() {
  return (
    <Layout>
      <Root>
        <Container>
          <SubTitle>Gracias por su compra!</SubTitle>
          <Link href="/">
            <PrimaryButton style={{ height: "50px" }}>
              Volver a la Home
            </PrimaryButton>
          </Link>
        </Container>
      </Root>
    </Layout>
  );
}
