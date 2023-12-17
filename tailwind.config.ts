import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb661e",
        background: "#ffd261",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Lalezar', 'serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      minHeight: {
        '20': '20px', // min-h-40
      },
      maxHeight: {
        '40': '40px', // max-h-160
      },
      
    },
  },
  plugins: [],
} satisfies Config;
