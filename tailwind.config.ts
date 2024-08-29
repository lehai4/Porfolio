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
        overlay: "var(--overlay)",
        lightOverlay: "var(--light-overlay)",
      },
      boxShadow: {
        primary: "0 0 1rem var(--primary-color)",
        subprimary: "0 0 3rem var(--primary-color)",
      },
      backgroundSize: {
        size: "200% 200%",
      },
      backgroundImage: {
        "linear-gradient-custom-pattern":
          "linear-gradient(180deg, rgba(179, 255, 253, 0) 0, rgba(255, 255, 253, .3) 45%, rgba(255, 255, 253, .3) 55%, rgba(179, 255, 253, 0));",
        "linear-gradient-run-color":
          "linear-gradient(90deg, #0ebeff, #ffdd40, #ae63e4, #47cf73, #0ebeff, #ffdd40, #ae63e4, #47cf73);",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },

        rainbowBorder: {
          "0%": { backgroundPosition: "0 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        skeleton: {
          "0%": { transform: "rotate(-36deg) translate(-35%, -430px)" },
          "60%": { transform: "rotate(-36deg) translate(-35%, 300%)" },
          "100%": { transform: "rotate(-36deg) translate(-35%, 300%)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear",
        "rainbow-border": "rainbowBorder 1.5s linear infinite",
        skeleton: "skeleton 3s linear infinite",
      },
      borderRadius: {
        inherit: "inherit",
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
