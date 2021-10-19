import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalStyle from 'Styles/globalStyle';
import Theme from 'Styles/theme';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function ThemeProvider({ children }) {
  const { darkMode } = useSelector(({ darkModeReducer }) => ({
    darkMode: darkModeReducer.darkMode,
  }));

  return (
    <StyledProvider theme={darkMode ? Theme.dark : Theme.light}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
}

export default ThemeProvider;
