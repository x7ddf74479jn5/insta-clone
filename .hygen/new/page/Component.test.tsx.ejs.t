---
to: <%= abs_path %>/<%= page_name %>.test.tsx
---
<% if (have_hooks) { -%>
import type { RenderResult } from "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react-hooks";
<% } -%>
import { render, screen } from "jest/test-utils";
import renderer from "react-test-renderer";

<% if (have_hooks) { -%>
import { useHook } from './hook'
<% } -%>
import <%= h.changeCase.pascal(page_name) %> from "./<%= file_name %>.page";

describe("<%= path %>", () => {
  it("Snapshot", () => {
    const component = renderer.create(<<%= h.changeCase.pascal(page_name) %> />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

    it("", () => {
    const { container } = render(<<%= h.changeCase.pascal(page_name) %> />);
    screen.debug();
  });
<% if (have_hooks) { -%>

  it("", () => {
    const { result } = renderHook(() => useHook());
  });  
<% } -%>
});