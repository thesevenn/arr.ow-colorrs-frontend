/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        "blue-100": "hsl(230,100%,11%)",
        "blue-200": "hsl(230,100%,19%)",
        "blue-300": "hsl(230,100%,28%)",
        "blue-400": "hsl(230,100%,42%)",
        "blue-500": "hsl(230,100%,54%)",
        "blue-600": "hsl(230,100%,65%)",
        "blue-700": "hsl(230,100%,72%)",
        "blue-800": "hsl(230,100%,79%)",
        "blue-900": "hsl(230,100%,91%)",
        "blue-950": "hsl(230,100%,97%)",

        "gray-100": "hsl(230,5%,11%)",
        "gray-200": "hsl(230,5%,19%)",
        "gray-300": "hsl(230,5%,28%)",
        "gray-400": "hsl(230,5%,42%)",
        "gray-500": "hsl(230,5%,54%)",
        "gray-600": "hsl(230,5%,65%)",
        "gray-700": "hsl(230,5%,72%)",
        "gray-800": "hsl(230,5%,79%)",
        "gray-900": "hsl(230,5%,91%)",
        "gray-950": "hsl(230,5%,97%)",
      },
      fontFamily: {
        "jetBrains": [ "var(--font-jetBrains)" ],
        "montserrat": [ "var(--font-montserrat)" ],
      },
      screens: {
        'sm': "540px"
      }
    },
  },
  plugins: [],
}
