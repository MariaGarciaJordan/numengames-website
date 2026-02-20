import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 

  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        numen: {
          sky: "rgb(0 173 181)",
          gold: "rgb(229 168 63)",
          neon: "rgb(255 160 151)",
          dark: "rgb(47 41 40)",
          solar: "rgb(252 250 234)",
        },
      },
      fontFamily: {
        heading: ["var(--font-geist)", "sans-serif"],
        body: ["var(--font-gentium)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
