/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
        },
        white: {
          DEFAULT: "#FFF",
        },
        primary: {
          DEFAULT: "hsl(210, 25%, 20%)", // Light mode primary color
          foreground: "hsl(220, 20%, 98%)", // Light mode foreground color
        },
        secondary: {
          DEFAULT: "hsl(150,60%,45%)", // Light mode secondary color
          foreground: "hsl(150, 90%, 98%)", // Light mode secondary foreground color
        },
        destructive: {
          DEFAULT: "hsl(0, 70%, 60%)", // Light mode destructive color (Red 500 equivalent)
          foreground: "hsl(0, 0%, 10%)", // Light mode destructive foreground (Dark Gray)
        },
      },
    },
  },
  plugins: [],
};
