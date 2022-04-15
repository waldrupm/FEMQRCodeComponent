const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      "bright-blue": "#2C7DFA",
      "blue-shade": "#3685FF",
      "dark-navy": "#1F314F",
      "med-gray": "#7D889E",
      "lgt-gray": "#D5E1EF",
      white: "#FFFFFF",
    },
    fontSize: {
      "1xl": "1.40rem",
      sm: "0.935rem",
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
