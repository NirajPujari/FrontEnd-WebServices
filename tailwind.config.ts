import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2C2C54",
        "secondary": "#1E1E1E",
        "accent-1": "#FFD700",
        "accent-2": "#3A3A3A",
        "accent-3": "#00FFFF"
      }
    },
  },
  plugins: [],
};
export default config;
