module.exports = {
  content: [
      './assets/src/dashboard-app/**/*.{html,js}'
  ],
  plugins: [
    // ...
    require( '@tailwindcss/forms' ),
  ],
  theme: {
    extend: {
      colors: {
        wpcolor : '#2271b1'
      }
    },
  },
  variants: {
    extend: {},
  },
}
