import { Footer } from "ui/footer";
import { HeaderWithBuscador } from "./header-with-buscador";

export function LayoutWithBuscador({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <HeaderWithBuscador />
      <div>{children}</div>
      <Footer />
    </>
  );
}
