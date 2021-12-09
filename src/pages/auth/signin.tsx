import type { CustomNextPage, InferGetServerSidePropsType } from "next";
import type { GetServerSideProps } from "next";
import { getProviders } from "next-auth/react";
import { SignIn } from "src/components/page/auth/SignIn";
import type { TProviders } from "src/types";

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const signIn: CustomNextPage<PageProps> = ({ providers }) => {
  return <SignIn providers={providers} />;
};

type ServerSideProps = {
  providers: TProviders;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const providers = await getProviders();
  if (!providers) throw new Error();

  return {
    props: {
      providers,
    },
  };
};

export default signIn;
