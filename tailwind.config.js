/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eef2f5",
        white: "#fff",
        dodgerblue: {
          "100": "#4285f3",
          "200": "#156bca",
          "300": "rgba(21, 107, 202, 0.1)",
        },
        gainsboro: "#e7e7e7",
        darkslategray: {
          "100": "#2e3439",
          "200": "#232f3b",
          "300": "#102c4a",
          "400": "#142d3a",
          "500": "#092c4c",
          "600": "#152a16",
          "700": "rgba(21, 42, 22, 0.7)",
          "800": "rgba(59, 70, 51, 0.45)",
        },
        dimgray: {
          "100": "#5c635a",
          "200": "rgba(92, 99, 90, 0.37)",
        },
        lavender: "#d4e9ff",
        tomato: "#f15e4a",
        cornflowerblue: {
          "100": "#5c9eff",
          "200": "#3b91f0",
        },
        silver: "#c4c4c4",
        gray: "rgba(255, 255, 255, 0.96)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "bonheur-royale": "'Bonheur Royale'",
        "nunito-sans": "'Nunito Sans'",
        lexend: "Lexend",
      },
      borderRadius: {
        "3xs": "10px",
        "4xs": "9px",
        "14xl": "33px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      smi: "13px",
      mini: "15px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "3xl": "22px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
  },
  corePlugins: {
    preflight: false,
  },
};
