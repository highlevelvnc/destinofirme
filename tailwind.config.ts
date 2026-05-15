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
        bone: "#f5f1ea",
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
        soft: "0 20px 60px -20px rgba(10,12,20,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
    },
  },
  plugins: [],
};
export default config;
