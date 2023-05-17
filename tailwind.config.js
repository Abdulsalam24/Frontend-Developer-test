/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 #110C00',
        DEFAULT: '0 1px 3px 0 white',
        md: '8px 5px 0 #FBAF00',
        lg: '8px 5px 0 white',
        xl: '22px 22px 0 #FBAF00',
      },
      gridTemplateColumns: {
        'new4': "repeat(auto-fit, minmax(300px, 1fr))"
      }
    },
  },
};