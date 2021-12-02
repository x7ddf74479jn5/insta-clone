/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "jest/test-utils";
import Home from "src/pages/index.page";

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Home />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText("Button"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
