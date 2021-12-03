import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/layouts/Footer";
import { Header } from "src/components/layouts/Header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
