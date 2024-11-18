import { vars } from 'nativewind';
import colors from 'tailwindcss/colors';

export const lightColors = {
  '--color-text': '#11181C',
  '--color-background': '#f8f9fa',
  '--color-tint': '#0a7ea4',
  '--color-green': colors.green[800],
  '--color-red': colors.red[800],
  '--color-special': '#d4d4d4',
  '--color-tab-bar-background': '#0a7ea4',
  '--color-tab-bar-default': '#f8f9fa',
  '--color-tab-bar-selected': colors.yellow[300],
};

export const darkColors = {
  '--color-text': '#ECEDEE',
  '--color-background': '#151718',
  '--color-tint': '#88ccff',
  '--color-green': colors.green[300],
  '--color-red': colors.red[300],
  '--color-special': '#0f172a',
  '--color-tab-bar-background': '#88ccff',
  '--color-tab-bar-default': '#151718',
  '--color-tab-bar-selected': colors.red[600],
};

const scales = {
  '--scale-focus': 1.1, // 10% larger
  '--scale-hover': 1.1, // 10% larger
  '--scale-active': 1.2, // 20% larger
};

export const theme = {
  light: vars({
    ...lightColors,
    ...scales,
  }),
  dark: vars({
    ...darkColors,
    ...scales,
  }),
};
