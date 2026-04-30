import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        night: "#090d18",
        panel: "rgba(13, 18, 32, 0.72)",
        line: "rgba(191, 219, 254, 0.16)",
        silver: "#d7e1ef",
        cyan: "#26d9ff",
        violet: "#8b5cf6",
        emerald: "#34d399"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.36)",
        glow: "0 0 40px rgba(38, 217, 255, 0.18)"
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(135deg, #26d9ff 0%, #8b5cf6 45%, #34d399 100%)",
        "glass-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        grid: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" }
        }
      },
      animation: {
        marquee: "marquee 58s linear infinite",
        grid: "grid 14s linear infinite"
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    })
  ]
};

export default config;
