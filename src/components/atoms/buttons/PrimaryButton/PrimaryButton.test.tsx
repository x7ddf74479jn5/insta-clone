import { render, screen } from "jest/test-utils";
import renderer from "react-test-renderer";

import { PrimaryButton } from "./";

describe("atoms/buttons/PrimaryButton", () => {
  it("Snapshot", () => {
    const component = renderer.create(<PrimaryButton>label</PrimaryButton>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("OK", () => {
    render(<PrimaryButton>label</PrimaryButton>);
    const button = screen.getByRole("button", { name: "label" });
    expect(button).toBeEnabled();
  });
});
