module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ["style-loader", "css-loader"],
  //   });
  //   return config;
  // },

  webpackFinal: async (config) => {
    const customConfig = { ...config };

    customConfig.module.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    customConfig.resolve.extensionAlias = {
      ".js": [".tsx", ".ts", ".js"],
    };

    return customConfig;
  },
};
