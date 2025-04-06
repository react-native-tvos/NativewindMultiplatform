import { vars } from 'nativewind';

export const colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0a7ea4',
    link: '#0a7ea4',
    green: '#166534',
    special: '#d4d4d4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#a0a0a0',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#a0a0a0',
    link: '#0a7ea4',
    green: '#86efac',
    special: '#0f172a',
  },
};

export const theme = {
  light: vars({
    '--color-text': colors.light.text,
    '--color-background': colors.light.background,
    '--color-tint': colors.light.tint,
    '--color-icon': colors.light.icon,
    '--color-tab-icon-default': colors.light.tabIconDefault,
    '--color-tab-icon-selected': colors.light.tabIconSelected,
    '--color-link': colors.light.link,
    '--color-green': colors.light.green,
    '--color-special': colors.light.special,
  }),
  dark: vars({
    '--color-text': colors.dark.text,
    '--color-background': colors.dark.background,
    '--color-tint': colors.dark.tint,
    '--color-icon': colors.dark.icon,
    '--color-tab-icon-default': colors.dark.tabIconDefault,
    '--color-tab-icon-selected': colors.dark.tabIconSelected,
    '--color-link': colors.dark.link,
    '--color-green': colors.dark.green,
    '--color-special': colors.dark.special,
  }),
};
