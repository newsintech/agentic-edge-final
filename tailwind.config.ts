import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // AGI Neutral Palette
        bg: "#0b0d10",           // graphite black
        surface: "#111418",      // primary surface
        surfaceSoft: "#161a20",  // secondary surface
        borderSoft: "#1f2430",

        textPrimary: "#e6e8eb",
        textSecondary: "#a3a8b3",
        textMuted: "#6b7280",

        // Intelligence Accent (used sparingly)
        intelligence: "#6ee7ff", // soft cyan
        warning: "#fbbf24",
        danger: "#f87171",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        surface: "0 0 0 1px rgba(255,255,255,0.04)",
        glow: "0 0 0 1px rgba(110,231,255,0.3)",
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
