import { useMe, useToken } from "@/lib/hooks";
import { BurguerButtons } from "@/ui/button";
import Link from "next/link";
import css from "./index.module.css";
import { LogoHeader } from "ui/icons";
import { useState } from "react";
import { Body, Large, SubTitle } from "@/ui/texts";
import { getSavedToken } from "@/lib/api";

export function Header() {
  const token = useToken();
  // const token = getSavedToken();

  const dataUser = useMe();
  // const dataUser = { email: "useMe()" };

  const [clicked, setClicked] = useState(false);

  function clickBurguerButtons() {
    setClicked(!clicked);
  }

  function cerrarSesion() {
    if (localStorage.getItem("auth_token")) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("email");
    }
  }

  // {dataUser ? dataUser.email : ""}

  return (
    <header className={css.header}>
      <div className={css.navbar}>
        <Link href="/">
          <LogoHeader />
        </Link>

        <BurguerButtons clicked={clicked} handleClick={clickBurguerButtons} />
      </div>

      <div className={`${css.nav} ${clicked ? "" : css.inactive}`}>
        <Link
          href="/signin"
          onClick={clickBurguerButtons}
          className={css.navLink}
        >
          <SubTitle>Ingresar</SubTitle>
        </Link>
        <Link
          href="/profile"
          onClick={clickBurguerButtons}
          className={css.navLink}
        >
          <SubTitle>Mi perfil</SubTitle>
        </Link>
        <Link
          href="/search?q="
          onClick={clickBurguerButtons}
          className={css.navLink}
        >
          <SubTitle>Buscar</SubTitle>
        </Link>
        <div className={css.userContainer}>
          <Body className={css.user}>{dataUser ? dataUser.email : ""}</Body>
          <Link
            href="/logout"
            onClick={clickBurguerButtons}
            className={`${token ? css.cerrarSesion : css.inactiveCerrarSesion}`}
          >
            <Large onClick={cerrarSesion}>CERRAR SESIÓN</Large>
          </Link>
        </div>
      </div>
    </header>
  );
}
