module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#00b0ff",
      secondary: "#1886E4",
      tertiary: "#33C0FF",
      green: "#00ff51",
      yellow: "#ffd500",
      coral: "#ff5500",
      gray: "#4B4B4B",
      purple: "#2600ff",
      lightGrayText: "#959595",
      black: "#000",
      white: "#fff",
      nearWhite: "#ccc",
      nearBlack: "#111111",
      lightGrayBackground: "#F5F7FC",
      eggshell: "#fafafa",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s cubic-bezier(0.5, 0, 0, 1) 0s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(80px)" },
          "15%": { opacity: 0, transform: "translateY(80px)" },
          "100%": {
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          },
        },
      },
    },
  },
  fontFamily: {
    sans: ["Poppins"],
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
};
