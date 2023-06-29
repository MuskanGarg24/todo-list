/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'primaryColor': '#ACC4E3',
      'secondaryColor': '#EBEBEB',
      'textColor': '86959E#',
      'success': '#359F7A'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

