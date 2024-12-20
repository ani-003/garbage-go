/** @type {import('tailwindcss').Config} */

const Colors = require('./constants/Colors');

module.exports = {

  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryGreen: Colors.PrimaryGreen,
        secondaryYellow: Colors.SecondaryYellow,
        accentBlue: Colors.AccentBlue,
        lightGray: Colors.LightGray,
        mediumGray: Colors.MediumGray,
        darkGray: Colors.DarkGray,
        successGreen: Colors.SuccessGreen,
        warningOrange: Colors.WarningOrange,
        dangerRed: Colors.DangerRed,
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
        latoBold: ["Lato-Bold", "sans-serif"],
        latoBlack: ["Lato-Black", "sans-serif"],
        mons: ["Montserrat", "sans-serif"],
        monsBold: ["Montserrat-Bold", "sans-serif"],
        gummy: ["Sour Gummy", "sans-serif"],

      },
    },
    plugins: [],
  }
}