import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#f6efe6",
        sepia: "#5a4638",
        ambermist: "#d4ab6b",
        cinemadark: "#1a1512"
      },
      fontFamily: {
        serifDisplay: ["Georgia", "Times New Roman", "serif"],
        sansBody: ["Inter", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(212, 171, 107, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
