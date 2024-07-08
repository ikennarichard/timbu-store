import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        reddish: "#AF3636",
        dark_cyan: "#0C8E8E",
        light_cyan: "#E0F7FA",
        alabaster: "#E8F5E9",
        laurel_green: "#BDC09F",
        light_silver: "#D9D9D9"
      },
    },
  },
  plugins: [],
};
export default config;
