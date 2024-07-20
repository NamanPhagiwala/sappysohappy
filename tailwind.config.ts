/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Serif SC", "Georgia", "serif"],
        serif: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#E4875D",
          secondary: "#4A4A4A",
          whiteColor: "#ffffff",
          disabledBg: "#edf1f2",
          bg: "#FAEEE4",
          blue: "#4054B2",
          black: "#141313",
          red: "#C12C2C",
          green: "#2EC589",
          yellow: "#F0AC00",
          gray: "#57647D",
          dark: "#080E12",
          cyan: "#32B8B2",
          teal: "#088DB2",
          light: "#F8FAFA",
          outline: "#080E121A",
          purple: "#5E35B5",
          pink: "#B53563",
          light_gray: "#78787D",
          heading: "#2C2C2CB3",
          border_gray: "#D2D2D4",
          button: {
            size: {
              sm: "10px 15px",
              md: "10px 25px",
              lg: "12px 30px",
            },
            font: {
              sm: "14px",
              md: "16px",
              lg: "16px",
            },
            radius: {
              square: "0px",
              rounded: "2px",
              curved: "50px",
            },
          },
          input: {
            size: {
              sm: "10px 15px",
              md: "10px 25px 10px 15px",
              lg: "12px 30px 12px 15px",
            },
            font: {
              sm: "14px",
              md: "16px",
              lg: "16px",
            },
            radius: {
              square: "0px",
              rounded: "2px",
              curved: "50px",
            },
          },
        },
      },
      boxShadow: {
        card: "0px 0px 14px 0px rgba(0, 0, 0, 0.04)",
      },
    },
  },
};
