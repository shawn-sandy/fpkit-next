import type { StorybookConfig } from "@storybook/nextjs";
import * as React from "react";

import CustomDocs from "./templates/custom-docs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@chromaui/addon-visual-tests",
  ],
  framework: {
    name: "@storybook/nextjs", // 👈 you can change the framework name/type
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Interactive Guide",
  },
};
export default config;
