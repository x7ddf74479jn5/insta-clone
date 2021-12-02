import { withPerformance } from "storybook-addon-performance";
import "../src/styles/global.css";

/** Mock next/image to <img /> */
import "./mocks/NextImage";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withPerformance];
