import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layouts/Layout";

const Home: NextPage = () => {
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

export default Home;
