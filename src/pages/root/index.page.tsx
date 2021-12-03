import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
    </Layout>
  );
};

export default Home;
