import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        // You can also define custom names if you prefer
        // geistSans: ['var(--font-geist-sans)'],
        // geistMono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;
