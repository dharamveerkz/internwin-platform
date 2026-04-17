import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Blues
        "blue-deep": "#0a1628",
        "blue-dark": "#0d2144",
        "blue-mid": "#1a4080",
        "blue-main": "#1e5cbe",
        "blue-bright": "#2d7ef7",
        "blue-light": "#5b9ef9",
        "blue-glow": "#93c5fd",
        // Brand Oranges
        "orange-main": "#f97316",
        "orange-light": "#fb923c",
        "orange-glow": "#fed7aa",
        // Neutrals
        "grey-50": "#f8fafc",
        "grey-100": "#f1f5f9",
        "grey-200": "#e2e8f0",
        "grey-400": "#94a3b8",
        "grey-600": "#475569",
        "grey-800": "#1e293b",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(45, 126, 247, 0.3)",
        "glow-orange": "0 0 20px rgba(249, 115, 22, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
