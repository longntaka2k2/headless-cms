import type { Config } from "tailwindcss";
import borderStyle from "tailwindcss-border-styles";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        ".cta": {
          border: theme("border.solid"),
          borderWidth: "1px",
          borderRadius: theme("borderRadius.lg"),
          cursor: "pointer",
          textAlign: "center",
          textDecoration: "none",
        },
      });
      addUtilities({
        ".absolute-center": {
          left: "50%",
          top: "50%",
          position: "absolute",
          transform: "translate(-50%,-50%)",
        },
        ".absolute-center-x": {
          left: "50%",
          position: "absolute",
          transform: "translateX(-50%)",
        },
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
    borderStyle(),
  ],
  theme: {
    borderStyles: {
      styles: true, // defaults to false
      colors: true, // defaults to false
    },
    extend: {
      container: {
        center: true,
        screens: {
          // DEFAULT: "100%",
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
        },
      },
      opacity: {
        8: "8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        linear: "linear-gradient(89deg, #00194F 0%, #AF0000 84.37%)",
        "gradient-red-1": "linear-gradient(89deg, #00194F 0%, #AF0000 84.37%)",
        linear1:
          "linear-gradient(71deg, rgba(255, 255, 255, 0.08) 14.63%, rgba(255, 255, 255, 0.00) 86.96%)",
      },
      backgroundSize: {
        "half-y": "auto 50%",
      },
      keyframes: {
        "left-to-right": {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
      },
      colors: {
        gray: { 1: "rgba(255, 255, 255, 0.24)", 10: "#262626" },
        whitesmoke: {
          100: "#f2f2f2",
          200: "#F1F1F1",
        },
        primary: {
          1: "#f0f5ff",
          2: "#d6e4ff",
          3: "#adc6ff",
          4: "#85a5ff",
          5: "#597ef7",
          6: "#1d39c4",
          7: "#10239e",
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
          white: {
            1: "#333333",
            2: "rgba(255, 255, 255, 0.2)",
            3: "rgba(255, 255, 255, 0.4)",
            4: "rgba(255, 255, 255, 0.6)",
            5: "rgba(255, 255, 255, 0.8)",
            6: "#FFFFFF",
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
        },
        background: {
          light: "#f9f9f9",
        },
        brand: {
          primary: "#AF0000",
          "primary-active": "#7c0000",
          secondary: "#00194F",
          "secondary-active": "#00081c",
          branda: "#F57C00",
          brandb: "#1135A8",
        },

        contact: "#AF0000",
        line: "#F2F2F2",
        footer: "#00194F",
        colortext: "#fff",

        linear: {
          1: "#537CD7",
        },
      },
      fontFamily: {
        lora: "Lora",
      },
      lineHeight: {
        12: "48px",
        "30": "30px",
        "21": "21px",
        "42": "42px",
        "27": "27px",
        "22": "22px",
        "56": "56px",
      },
      boxShadow: {
        1: "0px 12px 24px 0px rgba(0, 0, 0, 0.08)",
        2: "15px 32px 80px 0px rgba(0, 0, 0, 0.08)",
        3: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
        4: "0px 0px 12px 0px rgba(54, 50, 46, 0.08)",
        5: "8px 15px 15px 0px rgba(0, 0, 0, 0.10)",
        6:"0px 0px 20px 0px rgba(0, 0, 0, 0.11)",
        7: "0px 17px 30px 0px rgba(0, 0, 0, 0.07)",
        8: "0px 2px 5px 2px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        15: "60px",
        35: "140xp",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
};
export default config;
