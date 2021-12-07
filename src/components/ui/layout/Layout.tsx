import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="overflow-y-scroll h-screen bg-gray-50 scrollbar-hide">
      <Header />
      <main>{page}</main>
      <Footer />
    </div>
  );
};
