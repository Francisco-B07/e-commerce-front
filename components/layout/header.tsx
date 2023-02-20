import { useMe, useGetToken } from "@/lib/hooks";
import { BurguerButtons } from "@/ui/button";
import Link from "next/link";
import css from "./index.module.css";
import { LogoHeader } from "ui/icons";
import { useState } from "react";
import { Body, Large, SubTitle } from "@/ui/texts";
import router from "next/router";
import { LoginButtonHeader } from "./styled";

export function Header() {
  const token = useGetToken();

  const dataUser = useMe();
  const [clicked, setClicked] = useState(false);

  function clickBurguerButtons() {
    setClicked(!clicked);
  }

  function handleGoProfile() {
    setClicked(!clicked);
    if (token) {
      router.push("/profile");
    } else {
      router.push("/signin");
    }
  }

  return (
    <header className={css.header}>
      <div className={css.navbar}>
        <Link href="/">
          <LogoHeader />
        </Link>
        <BurguerButtons clicked={clicked} handleClick={clickBurguerButtons} />
      </div>
      <Link href="/signin">
        <LoginButtonHeader>Ingresar</LoginButtonHeader>
      </Link>

      <div className={`${css.nav} ${clicked ? "" : css.inactive}`}>
        <Link
          href="/signin"
          onClick={clickBurguerButtons}
          className={css.navLink}
        >
          <SubTitle>Ingresar</SubTitle>
        </Link>

        <SubTitle onClick={handleGoProfile} className={css.navLink}>
          Mi perfil
        </SubTitle>

        <Link
          href="/search?q="
          onClick={clickBurguerButtons}
          className={css.navLink}
        >
          <SubTitle>Buscar</SubTitle>
        </Link>

        <div className={css.userContainer}>
          <Body className={` ${token ? css.user : css.inactiveCerrarSesion}`}>
            {dataUser ? dataUser.email : ""}
          </Body>
          <Link
            href="/logout"
            onClick={clickBurguerButtons}
            className={`${token ? css.cerrarSesion : css.inactiveCerrarSesion}`}
          >
            <Large>CERRAR SESIÓN</Large>
          </Link>
        </div>
      </div>
    </header>
  );
}
