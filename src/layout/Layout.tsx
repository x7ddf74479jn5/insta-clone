import type { ReactNode, VFC } from "react";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <LayoutErrorBoundary>
        <main>{props.children}</main>
      </LayoutErrorBoundary>
      <Footer />
    </>
  );
};
