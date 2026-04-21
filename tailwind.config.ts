import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: { "60": "60" },
      colors: {
        cream:    "#FFFCFA", // Warmer, softer white
        offwhite: "#F5F0EB", // Champagne undertones
        mist:     "#EBE5DF",
        charcoal: "#2C2A29", // Softer brownish-black
        mid:      "#7A736E",
        soft:     "#A69F9B",
        accent:      "#C88B82", // Elegant Rose Gold / Soft Terracotta
        "accent-dark":  "#A86D65",
        "accent-light": "#E2A8A0",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'Poppins'", "sans-serif"],
        sans:    ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "grid-dark": "linear-gradient(rgba(44,42,41,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(44,42,41,0.04)_1px,transparent_1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%,100%": { boxShadow: "0 0 20px rgba(200,139,130,0.25)"  },
          "50%":      { boxShadow: "0 0 40px rgba(200,139,130,0.5), 0 0 80px rgba(200,139,130,0.15)" },
        },
      },
      boxShadow: {
        "accent-sm":  "0 0 16px rgba(200,139,130,0.2)",
        "accent-md":  "0 0 32px rgba(200,139,130,0.35)",
        "accent-lg":  "0 0 64px rgba(200,139,130,0.5)",
        "card":    "0 4px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;