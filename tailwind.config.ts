import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        silka: "Silka",
      },
      // Shadcn
      colors: {
        border: "var(--gray-5)",
        input: "var(--gray-5)",
        ring: "var(--accent-1)",
        background: "var(--color-panel-solid)",
        foreground: "var(--gray-12)",
        primary: {
          DEFAULT: "var(--accent-1)",
          foreground: "var(--gray-12)",
        },
        destructive: {
          DEFAULT: "var(--accent-1)",
          foreground: "var(--gray-12)",
        },
        muted: {
          DEFAULT: "var(--accent-1)",
          foreground: "var(--gray-12)",
        },
        accent: {
          DEFAULT: "var(--accent-1)",
          foreground: "var(--gray-12)",
        },
        popover: {
          DEFAULT: "var(--accent-1))",
          foreground: "var(--gray-12)",
        },
        card: {
          DEFAULT: "var(--color-panel-solid)",
          foreground: "var(--gray-12)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4p)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-heigh)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-heigh)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
