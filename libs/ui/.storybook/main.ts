import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },

  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@ui": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
};

export default config;