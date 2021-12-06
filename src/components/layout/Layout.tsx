import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/layout/Footer";
import { Header } from "src/components/layout/Header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
