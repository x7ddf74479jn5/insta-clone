import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: CustomLayout = (page) => {
  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
};
