/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#ef6c00",
        theme_variant: "#fff3e0",
        font: "#003049",
        background: "#ffffff",
        accent: "#f5fbfd",
        shade: "#ebe4e4",
        mute: "#9d9d9d",
        destructive: "#d50000",
      },
      fontWeight: {
        normal: 500,
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1700px",
      },
      height: {
        navbar: "80px",
      },
      width: {
        sidebar: "300px",
      },
      boxShadow: {
        rg: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        active: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      animation: {
        grow: "scale-up-tr 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both",
        slideIn:
          "slide-in-elliptic-bottom-fwd 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        "scale-up-tr": {
          "0%": {
            transform: "scale(0.5)",
            "transform-origin": "100% 0%",
          },
          "100%": {
            transform: "scale(1)",
            "transform-origin": "100% 0%",
          },
        },
        "slide-in-elliptic-bottom-fwd": {
          "0%": {
            transform: "translateY(600px) rotateX(30deg) scale(0)",
            "transform-origin": "10% 20%",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) rotateX(0) scale(1)",
            "transform-origin": "10% -400px",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
