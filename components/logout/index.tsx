import { saveToken } from "@/lib/api";
import { useRemoveToken } from "@/lib/hooks";
import { PrimaryButton } from "@/ui/button";
import Link from "next/link";
import styled from "styled-components";

export const Root = styled.div`
  min-height: 58vh;
  padding: 66px 35px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function LogoutComponent() {
  async function handlerLogout() {
    await saveToken("");
  }

  return (
    <>
      <Root>
        <Link href="/">
          <PrimaryButton
            style={{ height: "50px", width: "300px" }}
            onClick={handlerLogout}
          >
            Confirmar Logout
          </PrimaryButton>
        </Link>
      </Root>
    </>
  );
}
