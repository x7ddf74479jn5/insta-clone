import "src/styles/global.css";

import type { CustomAppProps } from "next/app";

const App = ({ Component, pageProps }: CustomAppProps) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });

  return getLayout(<Component {...pageProps} />);
};

export default App;
