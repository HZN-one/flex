const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    config.resolve.alias = {
      "@Atoms": path.resolve(__dirname, "../src/Components/Atoms"),
      "@Molecules": path.resolve(__dirname, "../src/Components/Molecules"),
      "@Organisms": path.resolve(__dirname, "../src/Components/Organisms"),
      "@src": path.resolve(__dirname, ".."),
      "@Components": path.resolve(__dirname, "../src/Components")
   }

    return config;
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
}
