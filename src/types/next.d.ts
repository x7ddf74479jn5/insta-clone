import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

declare module "next/app" {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  type AppPropsWithLayout = AppProps & {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Component: NextPageWithLayout;
  };
}
