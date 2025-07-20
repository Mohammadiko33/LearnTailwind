/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '.5rem',
    },
    screens: {
      "xs": "420px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {},
  },
  plugins: [],
}

