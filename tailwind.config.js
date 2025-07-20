/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '.5rem',
    },
    screens: {
      "mobile": "576px",
      "tablet": "768px",
      "laptop": "992px",
      "desktop": "1280px",
    },
    extend: {},
  },
  plugins: [],
}

