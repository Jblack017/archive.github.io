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
        ZenLoop: ['"Zen Loop"', "cursive"],
        Uchen: ['"Uchen"', "serif"],
        Landing: ['"IM Fell DW Pica SC"', "serif"],
      },
      backgroundColor: theme => ({
        primary: "#fe5e56",
      }),
      animation: {
        "spin-slow": "spin 6s ease-in-out infinite",
        "spin-slow-reverse": "spin 6s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "wiggle-reverse": "wiggle-reverse 2s ease-in-out infinite",
        point: "point 3s 1s ease-out infinite",
        jump: "jump 1s ease 2",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-14deg)" },
          "50%": { transform: "rotate(14deg)" },
        },
        "wiggle-reverse": {
          "0%, 100%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-14deg)" },
        },
        point: {
          "0%, 100%": { transform: "scale(1) translate(7px)" },
          "50%": { transform: "scale(1.1) translate(-5px)" },
        },
        jump: {
          "20%": { transform: "translateY(2%) scaleY(0.9)" },
          "40%": { transform: "translateY(-100%) scaleY(1.2)" },
          "50%": { transform: "translateY(10%) scaleY(0.8)" },
          "70%": { transform: "translateY(-5%) scaleY(1)" },
          "80%, 100%": { transform: "translateY(0) scaleY(1)" },
        },
      },
    },
    screens: {
      xs: { min: "480px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
      landscape: { raw: "(orientation: landscape)" },
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
      white: {
        DEFAULT: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
