import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Morning Theme
        morning: {
          primary: "#FEF7CD",
          secondary: "#D3E4FD",
          accent: "#F97316",
          text: "#1A1F2C",
        },
        // Evening Theme
        evening: {
          primary: "#9b87f5",
          secondary: "#FEC6A1",
          accent: "#D946EF",
          text: "#221F26",
        },
        // Night Theme
        night: {
          primary: "#1A1F2C",
          secondary: "#6E59A5",
          accent: "#8B5CF6",
          text: "#F6F6F7",
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;