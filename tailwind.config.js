module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      display: ['Open Sans', "sans-serif"],
      body: ['Open Sans', "sans-serif"]
    },
    extend: {
      backgroundColor: {
        "primary": "#84DD63",
        "primary-dark": "#6BAA75",
        "primary-light": "#CBFF4D",
        "background": "#2E294E",
        "accent": "#F05D23"
      },
      textColor: {
        "primary": "#84DD63",
        "primary-dark": "#6BAA75",
        "primary-light": "#CBFF4D",
          "background": "#2E294E",
        "accent": "#F05D23"
      }
    },
  },
  variants: {},
  plugins: [],
}
