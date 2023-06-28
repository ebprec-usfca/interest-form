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
    },
  },
  plugins: [],
} satisfies Config;
