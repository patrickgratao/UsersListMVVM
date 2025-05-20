module.exports = {
  content: [
    "./src/**/*.tsx",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        default: "var(--app-font-default)",
      },

      borderRadius: {
        lg: "10px",
        md: "6px",
        sm: "4px",
      },

      height: {
        appHeight: "calc(100vh - 128px)",
      },

      spacing: {
        maxLayout: "1600px",
      },

      colors: {
        white: "#fff",
        black: "#000",

        appNeutral: {
          50: "var(--app-neutral-50) /* #F0F5F6 */",
          100: "var(--app-neutral-100) /* #E6EAEB */",
          200: "var(--app-neutral-200) /* #E5E5E5 */",
          300: "var(--app-neutral-300) /* #D6DDDE */",
          400: "var(--app-neutral-400) /* #D2D9DA */",
          500: "var(--app-neutral-500) /* #9DA8A9 */",
          600: "var(--app-neutral-600) /* #354344 */",
          700: "var(--app-neutral-700) /* #203132 */",
          800: "var(--app-neutral-800) /* #21354E */",
        },

        primary: {
          100: "var(--app-primary-100) /* #95E0E6 */",
          200: "var(--app-primary-200) /* #8BD9E0 */",
          300: "var(--app-primary-300) /* #70D0D9 */",
          400: "var(--app-primary-400) /* #0EBCC8 */",
          500: "var(--app-primary-500) /* #03BAC6 */",
        },

        secondary: {
          100: "var(--app-secondary-100) /* #FFEAAF */",
          200: "var(--app-secondary-200) /* #FEE087 */",
          400: "var(--app-secondary-400) /* #F8D476 */",
          500: "var(--app-secondary-500) /* #FECB37 */",
        },

        error: {
          100: "var(--app-error-100) /* #FDECEA */",
          200: "var(--app-error-200) /* #FFCFC9 */",
          400: "var(--app-error-400) /* #EE593B */",
          500: "var(--app-error-500) /* #D74D47 */",
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#03BAC6",
          secondary: "#FECB37",
          tertiary: "#D74D47",
          accent: "#009f4e",
          neutral: "#ECF2FF",
          "base-100": "#fff",
          info: "#4195b7",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#FFCFC9",
          ghost: "#fff",
          "primary-content": "#fff",
          "secondary-content": "#fff",
          "accent-content": "#fff",
          "neutral-content": "#3B71FD",
          "info-content": "#122949",
          "error-content": "#D74D47",
        },
      },
    ],
  },
};
