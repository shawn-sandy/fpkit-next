import type { Preview } from "@storybook/react";
import "./style.css";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import React from "react";
import * as DocBlock from "@storybook/blocks";
import CustomDocs from "./templates/custom-docs";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: CustomDocs,
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export default preview;
