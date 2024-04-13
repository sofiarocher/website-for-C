
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}',
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    colors: {
      "pink": "#eed7d6",
      "brown": "#824626",
      "creme": "#fcede0",
      "white": "#ffffff",
      "black": "#121212" 
    },

    fontFamily: {
      "monserrat": ["Montserrat", "sans-serif"]
    }
  },
};
export const plugins = [
  nextui()
];