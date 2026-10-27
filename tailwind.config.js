/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 900: "#13102c", 800: "#16132f", 700: "#1d1d38", 600: "#2a2750" },
        brand: { DEFAULT: "#5e00f8", dark: "#4a00c7", light: "#8b5cf6", soft: "#ede9fe" },
        paper: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(15,23,42,0.1)",
        lift: "0 20px 40px -10px rgba(94,0,248,0.25)",
      },
    },
  },
  plugins: [],
};
