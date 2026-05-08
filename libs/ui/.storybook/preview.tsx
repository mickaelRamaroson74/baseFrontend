
import type { Preview, Decorator } from "@storybook/nextjs-vite";
import { themes } from "../src/tokens/themes";
import { ThemeProvider } from "../src/providers/ThemeProvider"
import "../src/styles/globals.css";

const withTheme: Decorator = (Story, context) => {
  const selected: string = (context.globals.appTheme as string) ?? "light";

  return (
    <ThemeProvider defaultTheme={selected}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    appTheme: {
      description: "App theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: themes.map((t: any) => ({
          value: t.name,
          title: t.label,
        })),
        dynamicTitle: true,
      },
      defaultValue: "light",
    },
  },

  parameters: {
    nextjs: {
      appDirectory: true,
      router: { pathname: "/" },
    },
    controls: { sort: "requiredFirst" },
    backgrounds: { disable: true },
    layout: "fullscreen",
  },
};

export default preview;