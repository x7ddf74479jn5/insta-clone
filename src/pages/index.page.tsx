import type { NextPage } from "next";
import Head from "next/head";
import { PrimaryButton } from "src/components/atoms/buttons";
import { Layout } from "src/layout/Layout";

const Home: NextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <PrimaryButton onClick={handleClick}>Button</PrimaryButton>
    </Layout>
  );
};

export default Home;
