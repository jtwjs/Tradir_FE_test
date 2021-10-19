import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'Components/Layout/Header/Header';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}

export default Layout;

const MainContainer = styled.main`
  padding-top: 6.4rem;
`;
