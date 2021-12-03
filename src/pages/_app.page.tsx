import "src/styles/global.css";

import type { AppPropsWithLayout } from "next/app";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });

  return getLayout(<Component {...pageProps} />);
};

export default App;
