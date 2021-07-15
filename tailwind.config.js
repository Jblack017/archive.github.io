module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "retro-digital": "url('./pages/landing/images/retro_digital.gif')",
      }),
      fontFamily: {
        ShadowsIntoLight: ['"Shadows Into Light Two"', "serif"],
        IndieFlower: ['"Indie Flower"', "open-sans"],
      },
      backgroundColor: theme => ({
        primary: "#fe5e56",
      }),
      animation: {
        "spin-slow": "spin 6s ease-in-out infinite",
        "spin-slow-reverse": "spin 6s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "wiggle-reverse": "wiggle-reverse 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        "wiggle-reverse": {
          "0%, 100%": { transform: "rotate(12deg)" },
          "50%": { transform: "rotate(-12deg)" },
        },
      },
    },
    screens: {
      xs: { min: "480px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    colors: {
      primary: {
        light: "#fe7e77",
        DEFAULT: "#fe5e53",
        dark: "#cb4b44",
      },
      secondary: {
        light: "#fd6afd",
        DEFAULT: "#fd46fd",
        dark: "#b131b1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
