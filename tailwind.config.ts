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
        "primary-color": "var(--primary-color)",
        "second-color": "var(--second-color)",
        "bg-primary": "var(--primary-color)",
        "shadow-primary": "var(--shadow-primary)",
        overlay: "var(--overlay)",
      },
      boxShadow: {
        primary: "0 0 1rem var(--primary-color)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
export default config;
