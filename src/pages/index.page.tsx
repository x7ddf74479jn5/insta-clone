import type { CustomNextPage } from "next";
import { Layout } from "src/components/layout/Layout";
import { Home } from "src/components/page/Index";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = Layout;

export default IndexPage;
