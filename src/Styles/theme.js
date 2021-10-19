const breakpoint = {
  desktop: 1200,
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
    border: 'rgba(0,0,0, 0.4)',
    bg: '#fff',
    white: '#fff',
    black: '#000',
    gray: '#5f6368',
    pink: '#FF4BB5',
  },
  device,
};

const dark = {
  color: {
    primary: '#fff',
    secondary: '#222222',
    border: 'rgba(255,255,255, 0.4)',
    bg: '#010101',
    white: '#fff',
    black: '#000',
    gray: '#9aa0a6',
    pink: '#FF4BB5',
  },
  device,
};

export default {
  light,
  dark,
};
