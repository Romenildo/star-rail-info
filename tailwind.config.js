/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist:[
    'bg-[#1C29BA]',
    'bg-[#00FF9C]',
    'bg-[#FFFFFF]',
    'bg-[#F84F36]',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
