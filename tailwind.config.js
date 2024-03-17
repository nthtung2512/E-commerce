/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        '900': '900',
        '1000': '1000',
      },
      boxShadow: {
        'custom': '0 2px 10px rgba(0, 0, 0, 0.2)',
        'signIn': '0px -10px 10px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'customPurple': 'rgb(127, 24, 127)',
        'hoverPurple': '#934398',
        'lightPink': '#fcf3f6',
      },
      padding: {
        'signIn':'10px 35%',
      },
      border: {
        '1': '1',
      }
    },
  },
  plugins: [],

};
