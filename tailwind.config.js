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
    'bg-[#F4D258]',
    'bg-[#8872F1]',
    'bg-[#47C7FD]',
    'bg-gradient-to-br from-amber-800 to-yellow-300',
    'bg-gradient-to-br from-purple-900 to-purple-300',
    'bg-gradient-to-br from-blue-900 to-blue-300 ',
    'bg-gradient-to-b from-purple-800 to-purple-200',
    'bg-gradient-to-b from-amber-600 to-orange-100'

  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-texture': "url('/images/bg.png')"
      }
    },
  },
  plugins: [],
}
