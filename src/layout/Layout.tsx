import type { ReactNode, VFC } from "react";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
