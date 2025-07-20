/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '.5rem',
    },
    screens: {
      "xl": {"max": "1280px"},
      "lg": {"max": "992px"},
      "md": {"max": "768px"},
      "sm": {"max": "576px"},
    },
    extend: {},
  },
  plugins: [],
}

