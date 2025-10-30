const { screens } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      ...screens,
      xl: "1200px",
    },
    container: {
      center: true,
      screens: {
        desktop: "1232px",
      },
      padding: {
        DEFAULT: ".75rem",
      },
    },
    extend: {
      colors: {
        primary: {
          1: "#f0f5ff",
          2: "#d6e4ff",
          3: "#adc6ff",
          4: "#85a5ff",
          5: "#597ef7",
          6: "#1d39c4",
          7: "#10239e",
        },
        red: {
          1: "#fff1f0",
          2: "#ffccc7",
          3: "#ffa39e",
          4: "#ff7875",
          5: "#ff4d4f",
          6: "#f5222d",
          7: "#cf1322",
        },
        orange: {
          1: "#fff7e6",
          2: "#ffe7ba",
          3: "#ffd591",
          4: "#ffc069",
          5: "#ffa940",
          6: "#fa8c16",
          7: "#d46b08",
        },
        yellow: {
          1: "#feffe6",
          2: "#ffffb8",
          3: "#fffb8f",
          4: "#fff566",
          5: "#ffec3d",
          6: "#fadb14",
          7: "#e7c801",
        },
        green: {
          1: "#f6ffed",
          2: "#d9f7be",
          3: "#b7eb8f",
          4: "#95de64",
          5: "#73d13d",
          6: "#389e0d",
          7: "#237804",
        },
        blue: {
          1: "#e6f3ff",
          2: "#b3d7ff",
          3: "#8abeff",
          4: "#61a3ff",
          5: "#3884ff",
          6: "#0f62fe",
          7: "#0958d9",
          8: "#0246d9",
        },
        violet: {
          1: "#f9f0ff",
          2: "#efdbff",
          3: "#d3adf7",
          4: "#b37feb",
          5: "#9254de",
          6: "#722ed1",
          7: "#531dab",
        },
        pending: {
          1: "#f2f2f2",
          2: "#dddddd",
          3: "#cccccc",
          4: "#999999",
          5: "#666666",
          6: "#333333",
        },
        ic: {
          ink: {
            1: "#f2f2f2",
            2: "#dddddd",
            3: "#cccccc",
            4: "#999999",
            5: "#666666",
            6: "#333333",
          },
          black: {
            1: "rgba(51, 51, 51, 0.08)",
            2: "rgba(51, 51, 51, 0.2)",
            3: "rgba(51, 51, 51, 0.4)",
            4: "rgba(51, 51, 51, 0.6)",
            5: "rgba(51, 51, 51, 0.8)",
            6: "rgba(0, 0, 0, 1)",
            7: "rgba(0, 0, 0, 0.15)",
          },
          white: {
            1: "rgba(255, 255, 255, 0.08)",
            2: "rgba(255, 255, 255, 0.2)",
            3: "rgba(255, 255, 255, 0.4)",
            4: "rgba(255, 255, 255, 0.6)",
            5: "rgba(255, 255, 255, 0.8)",
            6: "#FFFFFF",
          },
        },
        other: {
          1: "#F9F9F9",
        },
        success: "#389e0d",
        error: "#f5222d",
        warning: "#fa8c16",
        notification: "#0f62fe",
        link: "#0f62fe",
        clicked: "#722ed1",
        title: "#333",
        divider: "#f2f2f2",
        border: "#dddddd",
        disable: "#ccc",
        hint: "#666",
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        neutral: {
          1: "#f2f4f8",
          2: "#dde1e6",
          4: "#a2a9b0",
          5: "#878d96",
          6: "#697077",
          8: "#343a3f",
          10: "#121619",
        },
        "brand-primary": "#f57c00",
        "brand-secondary": "#1135a8",
        "primary-text": "#333",
        "disable-input": "#999",
        "background-default": "#F4F6F7",
        "border-default": "#F3F3F3",
        "bg-light": "#F9F9F9",
      },
      dropShadow: {
        active: "0px 0px 2px #7b61ff",
        error: "0px 0px 2px #f5222d",
      },
      boxShadow: {
        "field-error": "0px 0px 0px 2px rgba(245, 34, 45, 0.16)",
        1: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
        2: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        3: "0px 0px  0px 2px #c5c9df",
        4: "0px 0px 0px 2px #fddbdd",
        5: "0px 8px 16px rgba(0, 0, 0, 0.05)",
        6: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        7: "0px 0px 0px 2px rgba(29, 57, 196, 0.16)",
        8: "0px 0px 8px rgba(0, 0, 0, 0.24)",
        10: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
        11: "-8px 4px 20px 0px rgba(0, 0, 0, 0.16)",
        12: "0px 4px 8px 0px rgba(0, 0, 0, 0.12);",
      },
      keyframes: {
        scrollTransitionIn: {
          "0%": { overflow: "hidden" },
          "80%": { overflow: "hidden" },
          "100%": { overflow: "visible" },
        },
        scrollTransitionOut: {
          "0%": { overflow: "hidden" },
          "80%": { overflow: "hidden" },
          "100%": { overflow: "hidden" },
        },
        changeColor:{
          "0%": { color: "#333333" },
          "100%": { color: "#F57C00"},
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        showOn:{
          "0%": { transform: "translateY(50px)",opacity:0 },
          "100%": { transform: "translateY(0px)" ,opacity:1},
        },
        showdown:{
          "0%": { transform: "translateY(-70px)",opacity:0 },
          "100%": { transform: "translateY(0px)" ,opacity:1},
        },
        leftShow:{
          "0%": { transform: "translateX(-100px)",opacity:0 },
          "100%": { transform: "translateX(0px)" ,opacity:1},
        },
        rightShow:{
          "0%": { transform: "translateX(100px)",opacity:0 },
          "100%": { transform: "translateX(0px)" ,opacity:1},
        },
        hoverLading:{
          "0%": { backgroundImage:'#fff' },
          "100%": { backgroundImage: "linear-gradient(360deg,rgba(235,238,250,0.00)_0,rgba(172,190,255,0.30)_99%)"},
        },
        shaking: {
          "0%": {
            transform: "scale(1, 1)",
            rotate: "0deg",
          },
          "50%": {
            transform: "scale(1.2, 1.2)",
          },
          "75%": {
            transform: "scale(1.1, 1.1)",
          },
          "100%": {
            transform: "scale(0.9, 0.9)",
            rotate: "5deg",
          },
        },
        shaking2: {
          "0%": {
            transform: "scale(0.8,0.8)",
           
          },
          "50%": {
            transform: "scale(1.2, 1.2)",
          },
          "75%": {
            transform: "scale(1.1, 1.1)",
          },
          "100%": {
            transform: "scale(1, 1)",
          },
        },
      },
      animation: {
        scrollTransitionIn: "scrollTransitionIn 0.7s ease-in forwards",
        scrollTransitionOut: "scrollTransitionOut 0.7s ease-out forwards",
        "fade-in": "fade-in 150ms ease-in-out",
        shaking: "shaking 0.5s ease forwards",
        shaking2: "shaking2 0.5s ease",
        showOn:"showOn 0.5s ease",
        showdown:"showdown 0.6s ease",
        changeColor:"changeColor 1s ease",
        leftShow:"leftShow 0.5s ease",
        rightShow:"rightShow 0.5s ease",
        hoverLading:"hoverLading 0.5s ease",
      },
      content: {
        empty: '""',
      },
      borderRadius: {
        "3xl": "20px",
      },
      zIndex: {
        1: "1",
      },
      spacing: {
        15: "3.75rem",
      },
      backgroundImage: {
        smoothBlue:
          "linear-gradient(90deg, #00194F 0%, #2E58B1 45.07%, rgba(41, 97, 204, 0.48) 61.81%, rgba(66, 106, 155, 0.00) 69.10%)",
        smoothBlueToBot:
          "linear-gradient(180deg, #00194F 0%, rgba(0, 25, 79, 0.00) 100%)",
        silver: "linear-gradient(180deg, #F2F2F2 67.19%, #FFF 100%)",
      },
    },
    backgroundPosition: {
      bottomCommerce:"center bottom 6rem"
    }
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        ".absolute-center": {
          left: "50%",
          top: "50%",
          position: "absolute",
          transform: "translate(-50%,-50%)",
        },
        ".cta": {
          border: theme("border.solid"),
          borderWidth: "1px",
          borderRadius: theme("borderRadius.lg"),
          cursor: "pointer",
          textAlign: "center",
          textDecoration: "none",
        },
        ".cta-primary": {
          backgroundColor: theme("colors.brand-primary"),
          color: theme("colors.white"),
        },
        ".cta-secondary": {
          color: theme("colors.brand-primary"),
          borderColor: theme("colors.brand-primary"),
        },
      });
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".card-fx": {
          transition: "all 0.4s ease 0s",
          "&:hover": {
            transform: "translateY(-1px)",
            "box-shadow": "rgba(0, 0, 0, 0.25) 0px 2px 5px 2px",
          },
        },
      });
    }),
  ],
};
