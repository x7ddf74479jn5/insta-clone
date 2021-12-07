import type { CustomNextPage } from "next";
import { Home } from "src/components/page/Index";
import { Layout } from "src/components/ui/layout/Layout";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = Layout;

export default IndexPage;
