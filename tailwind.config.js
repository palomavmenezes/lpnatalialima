/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#FBFBFB',
        dark: '#0E0E0E',
        gray: '#D9D9D9',
        green: '#04840C'
      },
    },
  },
  plugins: [],
}

