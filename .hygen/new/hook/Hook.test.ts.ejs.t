---
to: <%= abs_path %>/<%= h.changeCase.camel(hook_name) %>.test.ts
---
import type { RenderResult } from "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react-hooks";

import { <%= h.changeCase.camel(hook_name) %> } from "./";

describe("<%= path %>", () => {
  it("", () => {
    const { result } = renderHook(() => <%= h.changeCase.camel(hook_name) %>());
  });  
});