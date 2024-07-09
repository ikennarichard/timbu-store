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
        light_silver: "#D9D9D9",
        dark_charcoal: "#333333",
      },

      screens: {
        "x-sm": { max: "640px" },
        sm: { max: "900px" },
        md: { max: "1024px" },
      },

      keyframes: {
        fade: {
          "0%": { opacity: "0.5", transform: "translateX(3px)", scale: "0.8" },
          "100%": { opacity: "1", transform: "translateX(0)", scale: "1" },
        },
      },

      animation: {
        fade: "fade 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
