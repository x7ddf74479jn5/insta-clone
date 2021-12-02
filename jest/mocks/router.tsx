import { RouterContext } from "next/dist/shared/lib/router-context";
import type { NextRouter } from "next/router";

export const mockRouter: NextRouter = {
  route: "/",
  pathname: "/",
  query: {},
  asPath: "/",
  basePath: "/",
  isLocaleDomain: true,
  isReady: true,
  push: jest.fn(),
  prefetch: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isPreview: false,
};

export const withMockedRouter = (
  router: Partial<NextRouter> = {},
  children: React.ReactElement
): React.ReactElement => {
  const mockedRouter: NextRouter = {
    ...mockRouter,
    ...router,
  };

  return <RouterContext.Provider value={mockedRouter}>{children}</RouterContext.Provider>;
};
