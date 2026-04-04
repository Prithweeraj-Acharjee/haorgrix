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
          DEFAULT: "#4A94BA",
          dark: "#356B86",
          hover: "#5EA9D1",
        },
        accent: {
          DEFAULT: "#82CAEB",
          dark: "#5EA9D1",
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
        art: {
          midnight: "#0F111A",
          indigo: "#1A1525",
          primary: "#4A94BA",
          accent: "#82CAEB",
          secondary: "#425F72",
          light: "#9FD7F1",
          sky: "#4B6C8F",
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
        "h1": ["clamp(2.5rem, 5.5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.05em", fontWeight: "800" }],
        "h2": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "h3": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body": ["clamp(0.9375rem, 1.1vw, 1.0625rem)", { lineHeight: "1.6", fontWeight: "400" }],
        "caption": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      maxWidth: {
        site: "1200px",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
