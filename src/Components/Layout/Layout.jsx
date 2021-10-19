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
      <SkipToMain href="#main">메뉴 건너뛰기</SkipToMain>
      <Header />
      <MainContainer id="main">{children}</MainContainer>
    </>
  );
}

export default Layout;

const SkipToMain = styled.a`
  display: none;

  @media screen and ${({ theme }) => theme.device.desktop} {
    display: block;
    height: 1px;
    margin-bottom: -1px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 3;
    color: ${({ theme }) => theme.color.primary} !important;
    overflow: hidden;

    &:focus {
      height: auto;
      margin-bottom: 0;
    }
  }
`;

const MainContainer = styled.main`
  padding-top: 6.4rem;
  color: ${({ theme }) => theme.color.primary};
`;
