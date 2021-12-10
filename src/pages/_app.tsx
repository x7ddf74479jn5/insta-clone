import "src/styles/global.css";

import type { CustomAppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });

  return (
    <SessionProvider session={session}>
      <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
    </SessionProvider>
  );
};

export default App;
