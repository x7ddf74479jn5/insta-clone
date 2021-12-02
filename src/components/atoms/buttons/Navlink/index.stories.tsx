import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { userEvent, within } from "@storybook/testing-library";

import { withRouterContext } from "../../../../../.storybook/mocks/context";
import { NavLink } from ".";

const routerOptions = {
  route: "/",
  pathname: "/",
  asPath: "/",
};

export default {
  title: "buttons/NavLink",
  component: NavLink,
  decorators: [
    (storyFn: () => StoryFnReactReturnType) => {
      return withRouterContext(storyFn, routerOptions);
    },
  ],
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => {
  return (
    <NavLink {...args}>
      <a style={{ display: "inline-block", padding: 12 }}>Home</a>
    </NavLink>
  );
};

export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  href: "/",
  activeClassName: "",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByRole("link", { name: "Home" }));
};
