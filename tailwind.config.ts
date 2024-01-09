import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main50: "var(--main-50)",
        main100: "var(--main-100)",
        main200: "var(--main-200)",
        main300: "var(--main-300)",
        main400: "var(--main-400)",
        main500: "var(--main-500)",
        main600: "var(--main-600)",
        main700: "var(--main-700)",
        main800: "var(--main-800)",
        main900: "var(--main-900)",
        main950: "var(--main-950)",

        primary: "var(--primary)",
        primary50: "var(--primary-50)",
        primary100: "var(--primary-100)",
        primary200: "var(--primary-200)",
        primary300: "var(--primary-300)",
        primary400: "var(--primary-400)",
        primary500: "var(--primary-500)",
        primary600: "var(--primary-600)",
        primary700: "var(--primary-700)",
        primary800: "var(--primary-800)",
        primary900: "var(--primary-900)",
        primary950: "var(--primary-950)",

        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
