import { vars } from 'nativewind';

export const lightColors = {
  '--color-text': '#11181C',
  '--color-background': '#fff',
  '--color-tint': '#0a7ea4',
  '--color-icon': '#687076',
  '--color-tab-icon-default': '#687076',
  '--color-tab-icon-selected': '#0a7ea4',
  '--color-link': '#0a7ea4',
  '--color-green': '#166534',
  '--color-red': '#991b1b',
  '--color-special': '#d4d4d4',
};

export const darkColors = {
  '--color-text': '#ECEDEE',
  '--color-background': '#151718',
  '--color-tint': '#a0a0a0',
  '--color-icon': '#9BA1A6',
  '--color-tab-icon-default': '#9BA1A6',
  '--color-tab-icon-selected': '#a0a0a0',
  '--color-link': '#0a7ea4',
  '--color-green': '#86efac',
  '--color-red': '#fca5a5',
  '--color-special': '#0f172a',
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
