import type { CustomNextPage, InferGetServerSidePropsType } from "next";
import type { GetServerSideProps } from "next";
import { getProviders } from "next-auth/react";
import { SignIn } from "src/components/page/auth/SignIn";
import { Layout } from "src/components/ui/layout/Layout";
import type { TProviders } from "src/types";

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SignInPage: CustomNextPage<PageProps> = ({ providers }) => {
  return <SignIn providers={providers} />;
};

SignInPage.getLayout = Layout;

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

export default SignInPage;
