import Head from "next/head";
import { Layout } from "src/components/layout/Layout";

export const Home: React.VFC = () => {
  return (
    <Layout>
      <Head>
        <title>Insta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is the Insta</h1>
      {/* Feed */}
      {/* Modal */}
    </Layout>
  );
};
