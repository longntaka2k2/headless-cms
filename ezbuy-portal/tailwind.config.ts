import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addComponents({
        ".absolute-center": {
          left: "50%",
          top: "50%",
          position: "absolute",
          transform: "translate(-50%,-50%)",
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
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          // DEFAULT: "100%",
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1176px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          1: "rgba(255, 255, 255, 0.24)",
          2: "rgba(0, 0, 0, 0.24)",
          3: "rgba(255, 255, 255, 0.8)",
          10: "#262626",
          11: "#F5F5F5",
          12: "#D9D9D9",
          13: "#595959",
        },
        brand: {
          primary: "#00194F",
          "primary-active": "#00081c",
          secondary: "#B81010",
          "secondary-active": "#7c0000",
        },
        whitesmoke: {
          100: "#f2f2f2",
          200: "#F1F1F1",
        },
      },
      lineHeight: {
        "30": "30px",
        "21": "21px",
        "42": "42px",
        "27": "27px",
        "22": "22px",
        "54": "54px",
      },
      boxShadow: {
        1: "0px 12px 24px 0px rgba(0, 0, 0, 0.08)",
        2: "15px 32px 80px 0px rgba(0, 0, 0, 0.08)",
        3: "0px 8px 12px rgba(0, 0, 0, 0.16)",
        4: "0px 4px 8px rgba(0, 0, 0, 0.24)",
        5: "0 0 5px 0 rgba(0,0,0,0.1)",
        6: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)",
      },
      keyframes: {
        moveToLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 7))",
          },
        },
      },
      fontFamily: {
        yuGoth: ["var(--yu-gothic)"],
      },
      spacing: {
        15: "60px",
      },
    },
  },
};
export default config;
