/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '.5rem',
    },
    fontFamily: {
      "irsansx": "IRANSansX",
      "iryekanx": "IRANYekanX"
      // اسم کی که مینویسیم اسمی هست که میخایم توی پروژه ازش استفاده کنیم
    // اسم ولیو که مینویسیم باید دقیقا اسمی باشه که توی اپ سی اس اس توی فونت فیس اسم رو توی فونت فمیلی گذاشتیم
    },
    extend: {},
  },
  plugins: [],
}

