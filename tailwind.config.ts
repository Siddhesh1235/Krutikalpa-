import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "#FAFAFA",
        card: {
          DEFAULT: "#101010",
          foreground: "#FAFAFA",
          hover: "#1A1A1A",
        },
        popover: {
          DEFAULT: "#101010",
          foreground: "#FAFAFA",
        },
        primary: {
          DEFAULT: "#FF6B0A",
          hover: "#FF8C38",
          dark: "#E85D04",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E85D04",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#18181B",
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#FF6B0A",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        border: "#262626",
        input: "#141414",
        ring: "#FF6B0A",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF6B0A 0%, #E85D04 100%)",
        "orange-gradient-hover": "linear-gradient(135deg, #FF8C38 0%, #FF6B0A 100%)",
        "glow-radial": "radial-gradient(circle at 50% 50%, rgba(255, 107, 10, 0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)",
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(249, 115, 22, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(249, 115, 22, 0.4)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "float-reverse": "floatReverse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
