/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '.5rem',
      },
      spacing: {
        "22": "5.5rem",
        "sm": "6px",
        "lg": "12px"
      },
    },

  },
  plugins: [],
}

