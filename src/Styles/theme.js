const breakpoint = {
  desktop: 1024,
  tablet: 768,
};

const device = {
  desktop: `(min-width: ${breakpoint.desktop}px)`,
  tablet: `(min-width: ${breakpoint.tablet}px)`,
};

const light = {
  color: {
    primary: '#121212',
    secondary: '#EDEDED',
    bg: '#fff',
    white: '#fff',
    black: '#000',
    gray: '#5f6368',
    blue: '#4b84ff',
    blueDark: '#3b69cc',
    pink: '#FF4BB5',
    pinkDark: '#cc3b91',
    encodingPrimary: '%23000',
    encodingSecondary: '%23EDEDED',
  },
  boxShadow: {
    table:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  device,
};

const dark = {
  color: {
    primary: 'rgba(255,255,255, 0.87)',
    secondary: '#222222',
    bg: '#121212',
    white: '#fff',
    black: '#000',
    gray: '#9aa0a6',
    blue: '#4b84ff',
    blueDark: '#3b69cc',
    pink: '#FF4BB5',
    pinkDark: '#cc3b91',
    encodingPrimary: '%23fff',
    encodingSecondary: '%23222',
  },
  boxShadow: {
    table:
      '0px 3px 1px -2px rgb(255 255 255 / 20%), 0px 2px 2px 0px rgb(255 255 255 / 14%), 0px 1px 5px 0px rgb(255 255 255 / 12%)',
  },
  device,
};

export default {
  light,
  dark,
};
