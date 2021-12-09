import "src/styles/global.css";

import type { CustomAppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });

  return <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>;
};

export default App;
