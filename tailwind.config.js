/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgwhite: "var(--bgwhite)",
        "hc-0j-in": "var(--hc-0j-in)",
        "m-b-3t-zi": "var(--m-b-3t-zi)",
        "ML-tw-1j": "var(--ML-tw-1j)",
        "tx-u7vg": "var(--tx-u7vg)",
        "ws-j7-it": "var(--ws-j7-it)",
        "x-1l-ubo-z": "var(--x-1l-ubo-z)",
        "x-7rs-fx": "var(--x-7rs-fx)",
        "z-vq-cz-3": "var(--z-vq-cz-3)",
      },
      fontFamily: {
        "1440-h1": "var(--1440-h1-font-family)",
        "1440-h2": "var(--1440-h2-font-family)",
        "1440-h3": "var(--1440-h3-font-family)",
        "1440-l1": "var(--1440-l1-font-family)",
        "1440-l2": "var(--1440-l2-font-family)",
        "1440-t1": "var(--1440-t1-font-family)",
        "1440-t2": "var(--1440-t2-font-family)",
        "1440-t3": "var(--1440-t3-font-family)",
      },
    },
  },
  plugins: [],
};