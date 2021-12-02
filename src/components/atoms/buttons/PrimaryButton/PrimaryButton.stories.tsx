import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { PrimaryButton } from "./";

export default {
  title: "src/components/atoms/buttons/PrimaryButton/PrimaryButton",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => {
  return <PrimaryButton {...args}>label</PrimaryButton>;
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByRole("button", { name: "label" }));
  await userEvent.click(canvas.getByRole("button", { name: "label" }));
};
