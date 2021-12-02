const path = require("path");

const toPath = (_path) => path.resolve(__dirname, _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-performance",
    // NOTE: postcss option
    // {
    //   name: "@storybook/addon-postcss",
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require("postcss"),
    //     },
    //   },
    // },
  ],
  features: {
    interactionsDebugger: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  // NOTE: scss option
  // webpackFinal: async (baseConfig) => {
  //   baseConfig.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       "style-loader",
  //       {
  //         loader: "css-loader",
  //         options: {
  //           importLoaders: 1,
  //           modules: {
  //             localIdentName: "[local]___[hash:base64:2]",
  //           },
  //         },
  //       },
  //       "sass-loader",
  //     ],
  //   });
  //   return { ...baseConfig };
  // },
};
