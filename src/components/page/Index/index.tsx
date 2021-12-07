import Head from "next/head";
import { Feed } from "src/components/model/Feed";

export const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Insta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feed />
      {/* Modal */}
    </>
  );
};
