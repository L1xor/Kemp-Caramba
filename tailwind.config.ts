import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f4",
          100: "#e0ebe3",
          200: "#c1d7c9",
          300: "#98bda7",
          400: "#6b9c80",
          500: "#4a7d61",
          600: "#37624a",
          700: "#2c4e3c",
          800: "#1f3a2c",
          900: "#152a20",
        },
        sand: {
          50: "#fdfbf6",
          100: "#faf5e9",
          200: "#f3e8ca",
          300: "#e9d6a3",
          400: "#ddbe72",
          500: "#cda24a",
          600: "#b0813a",
          700: "#8d6430",
          800: "#6e4e2a",
          900: "#5a4025",
        },
        terracotta: {
          50: "#fef4ee",
          100: "#fde5d5",
          200: "#fac6a5",
          300: "#f6a06d",
          400: "#f0793c",
          500: "#e35a1f",
          600: "#c74316",
          700: "#a13314",
          800: "#822c17",
          900: "#6b2716",
        },
        lake: {
          50: "#eefbfc",
          100: "#d4f2f5",
          200: "#ace3ea",
          300: "#77cddb",
          400: "#43adc0",
          500: "#2a8ea3",
          600: "#257286",
          700: "#245c6d",
          800: "#234c5b",
          900: "#20404d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
      },
      boxShadow: {
        card: "0 12px 40px -12px rgba(21, 42, 32, 0.25)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(15,26,20,0.15) 0%, rgba(15,26,20,0.55) 55%, rgba(15,26,20,0.92) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
