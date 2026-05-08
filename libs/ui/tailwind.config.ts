import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
                    light: "rgb(var(--color-primary-light) / <alpha-value>)",
                    dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
                    light: "rgb(var(--color-secondary-light) / <alpha-value>)",
                    dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
                },
                accent: { DEFAULT: "rgb(var(--color-accent) / <alpha-value>)" },
                success: { DEFAULT: "rgb(var(--color-success) / <alpha-value>)" },
                warning: { DEFAULT: "rgb(var(--color-warning) / <alpha-value>)" },
                danger: { DEFAULT: "rgb(var(--color-danger) / <alpha-value>)" },
                background: "rgb(var(--color-background) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                border: "rgb(var(--color-border) / <alpha-value>)",
                "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
                "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
                "text-disabled": "rgb(var(--color-text-disabled) / <alpha-value>)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
        },
    },
    plugins: [],
};

export default config;