import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f4f5f8",
          100: "#e6e8ee",
          200: "#c3c7d3",
          300: "#9ba1b3",
          400: "#5d6479",
          500: "#363b4d",
          600: "#23263a",
          700: "#181b2a",
          800: "#10121d",
          900: "#0a0c14",
          950: "#05060b",
        },
        gold: {
          50: "#faf6ef",
          100: "#f1e7d2",
          200: "#e2cca2",
          300: "#d2b176",
          400: "#c39a55",
          500: "#b08544",
          600: "#956d38",
          700: "#785530",
          800: "#5e432a",
          900: "#4b3724",
        },
        cream: {
          50: "#fdfbf6",
          100: "#f8f4ea",
          200: "#f0ead8",
          300: "#e4dbc1",
          400: "#d4c7a4",
        },
        bone: "#f5f1ea",
        ink: "#1a1d28",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        loose2: "0.18em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(10,12,20,0.12)",
        card: "0 1px 2px rgba(10,12,20,0.04), 0 24px 48px -24px rgba(10,12,20,0.15)",
        glow: "0 30px 60px -20px rgba(195,154,85,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
