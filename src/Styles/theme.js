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
    primary: '#000',
    secondary: '#EDEDED',
    bg: '#fff',
    white: '#fff',
    black: '#000',
    gray: '#5f6368',
    pink: '#FF4BB5',
    pinkDark: '#cc3b91',
    encodingPrimary: '%23000',
    encodingSecondary: '%23EDEDED',
  },
  device,
};

const dark = {
  color: {
    primary: '#fff',
    secondary: '#222222',
    bg: '#010101',
    white: '#fff',
    black: '#000',
    gray: '#9aa0a6',
    pink: '#FF4BB5',
    pinkDark: '#cc3b91',
    encodingPrimary: '%23fff',
    encodingSecondary: '%23222',
  },
  device,
};

export default {
  light,
  dark,
};
