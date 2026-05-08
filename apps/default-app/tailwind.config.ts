import type { Config } from "tailwindcss";
import { tailwindConfig } from "../../libs/ui/tailwind.config";

const defaultConfig = tailwindConfig([
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "../../libs/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
]);

const config: Config = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme?.extend,
      // Add any app-specific theme extensions here
    },
  },
  plugins: [...(defaultConfig.plugins ?? [])],
};

export default config;
