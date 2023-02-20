import { saveToken } from "@/lib/api";
import { useMe } from "@/lib/hooks";
import { PrimaryButton } from "@/ui/button";
import Link from "next/link";
import styled from "styled-components";
import router from "next/router";

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
    router.push("/signin");
  }

  return (
    <>
      <Root>
        <PrimaryButton
          style={{ height: "50px", width: "300px" }}
          onClick={handlerLogout}
        >
          Confirmar Logout
        </PrimaryButton>
      </Root>
    </>
  );
}
