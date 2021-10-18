const breakpoint = {
  desktop: 1200,
  tablet: 768,
};

const device = {
  desktop: `(min-width: ${breakpoint.desktop}px)`,
  tablet: `(min-width: ${breakpoint.tablet}px)`,
};

const color = {};

export const theme = {
  device,
  color,
};
