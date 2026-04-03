import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#57819B",
          dark: "#3D5B6E",
          hover: "#456a81",
        },
        accent: {
          DEFAULT: "#A9E0F6",
          dark: "#8abfe0",
        },
        neutral: {
          50: "#ffffff",
          100: "#F4FAFE",
          200: "#E2F0F9",
          300: "#C4DFEC",
          500: "#7A9BAD",
          800: "#2E4A5A",
          900: "#1E3344",
        },
        // Legacy color tokens used across pages
        steel: {
          DEFAULT: "#57819B",
          dark: "#3D5B6E",
          light: "#C4DFEC",
        },
        sky: "#A9E0F6",
        ice: "#F4FAFE",
        charcoal: "#1E3344",
        "text-primary": "#2E4A5A",
        "text-secondary": "#7A9BAD",
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains)", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "h1": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "h3": ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        "body": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
