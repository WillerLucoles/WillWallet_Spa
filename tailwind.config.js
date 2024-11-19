/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'login-img': "url('/src/assets/Background_Home.jpg')", 'login-img-2': "url('/src/assets/Signup_Background.jpg')" },
    },
  },
  plugins: [],
}