import type Queries from "@testing-library/dom/types/queries";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";

import { mockRouter } from "./mocks";

// const mockInitialState = {};

// const mockContextValue = {};

export const Providers: React.ComponentType<{ children?: React.ReactNode }> = ({ children }) => {
  return <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>;
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult<typeof Queries, HTMLElement> => {
  return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from "./mocks";
export * from "@testing-library/react";

// override render method
export { customRender as render };

export const reTestCase = {
  anyWord: expect.stringMatching(/\w+/),
  anyImage: expect.stringMatching(/^(data:image\/gif)|\.(png|webp|jpeg|jpg|svg)$/),
};
