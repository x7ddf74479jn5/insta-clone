---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { <%= h.changeCase.pascal(component_name) %> } from "./";

export default {
  title: "<%= abs_path %>/<%= h.changeCase.pascal(component_name) %>",
  component: <%= h.changeCase.pascal(component_name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascal(component_name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(component_name) %>> = (args) => {
  return (
    <<%= h.changeCase.pascal(component_name) %> {...args} />
  );
};

export const Default = Template.bind({});

Default.args = {

};