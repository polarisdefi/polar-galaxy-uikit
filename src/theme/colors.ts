import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#7D65FF",
  primaryBright: "#99A3FF",
  primaryDark: "#99A3FF",
  secondary: "#99A3FF",
  success: "#99A3FF",
  warning: "#99A3FF",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0F0B25",
  backgroundDisabled: "#0F0B25",
  contrast: "#191326",
  invertedContrast: "#99A3FF",
  input: "#191439",
  tertiary: "#99A3FF",
  text: "#FFFFFF",
  textDisabled: "#5B5B5B",
  textSubtle: "#7D65FF",
  borderColor: "#E9EAEB",
  card: "#110D2A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #99A3FF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "rgba(86,65,216,0.4)",
  background: "#0F0B25",
  backgroundDisabled: "#0F0B25",
  contrast: "#FFFFFF",
  invertedContrast: "#99A3FF",
  input: "#191439",
  primaryDark: "#99A3FF",
  tertiary: "#99A3FF",
  text: "#FFFFFF",
  textDisabled: "#5B5B5B",
  textSubtle: "#7D65FF",
  borderColor: "#524B63",
  card: "#110D2A",
  gradients: {
    bubblegum: "linear-gradient(180deg, #99A3FF 0%, #6199C1 100%)",
  },
};
