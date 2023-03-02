import { get } from 'lodash';
import { FALLBACKCOLOR, FALLBACKFONT } from '../conf';
import { IThemeProvider } from '../interfaces';

// simple theme provider which currently exposes
// getColor / getFont methods
// in the future, it could take arguments containing
// the themeConfiguration object and a fallback Object

const themeConfiguration = {
  colors: {
    primary: '#00b0ff',
    secondary: '#ff4081',
    success: '#4caf50',
    info: '#00bcd4',
    error: '#f44336',
    dark: '#212121',
    light: '#f5f5f5',
  },
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Roboto Mono, monospace',
  },
};

const themeProvider = (): IThemeProvider => {
  return {
    getColor: (color) => {
      return get(themeConfiguration, `colors.${color || 'N_A'}`, FALLBACKCOLOR);
    },
    getFont: (font) => {
      return get(themeConfiguration, `fonts.${font || 'N_A'}`, FALLBACKFONT);
    },
  };
};

export { themeProvider };
