/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.875rem",
        xs: "1rem",
        sm: "1.125rem",
        base: "1.1815rem",
        lg: "1.25rem",
        xl: "1.3125rem",
        "2xl": "1.5rem",
        "3xl": "2.875rem",
        "4xl": "3.125rem",
        "5xl": "3.5rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },
      colors: {
        blue: {
          DEFAULT: "#0F0BC7",
          dark: "#0D03C3",
          light: "#2272FF",
        },
        white: {
          DEFAULT: "#FFFFFF",
          light: "#F6F5FF",
        },
        grey: "#E3E2FD",
        black: "#000000",
        bg: "#040335",
      },
    },
  },
  plugins: [],
};
