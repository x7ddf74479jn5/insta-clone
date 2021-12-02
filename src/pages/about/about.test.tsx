/**
 * @jest-environment jsdom
 */
import { render } from "jest/test-utils";
import About from "src/pages/about/index.page";
// render
describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
