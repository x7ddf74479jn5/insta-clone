import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="overflow-y-scroll h-screen bg-gray-50 scrollbar-hide">
      <Header />
      <main className="grid grid-cols-1 mx-auto md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">{page}</main>
      <Footer />
    </div>
  );
};
