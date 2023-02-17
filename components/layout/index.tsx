import { Footer } from "ui/footer";
import { Header } from "./header";

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
