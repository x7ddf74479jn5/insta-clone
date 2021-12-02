import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { NextRouter } from "next/router";

// const initialState = {
//   isOpen: false,
//   type: undefined,
//   data: null,
// };

// const mockDispatchContextValue = {
//   open: () => {},
//   close: () => {},
// };

export const withContext = (storyFn: () => StoryFnReactReturnType) => {
  return storyFn();
  // <StateContext.Provider value={initialState}>
  //   <DispatchContext.Provider value={mockDispatchContextValue}>
  //     {storyFn()}
  //   </DispatchContext.Provider>
  // </StateContext.Provider>
};

export const withRouterContext = (storyFn: () => StoryFnReactReturnType, options: Partial<NextRouter>) => {
  const mockedRouter: NextRouter = {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "/",
    isLocaleDomain: true,
    isReady: true,
    push: () => {
      return Promise.resolve(true);
    },
    prefetch: () => {
      return Promise.resolve();
    },
    replace: () => {
      return Promise.resolve(true);
    },
    reload: () => {},
    back: () => {},
    beforePopState: () => {},
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    isFallback: false,
    isPreview: false,
    ...options,
  };
  return <RouterContext.Provider value={mockedRouter}>{storyFn()}</RouterContext.Provider>;
};
