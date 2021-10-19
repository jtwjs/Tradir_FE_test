import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'Assets/icons/ic_logo.svg';

function HeaderLogo() {
  return (
    <HeaderLogoContainer>
      <HomeLink to="/">
        <StyledLogoIcon />
        Beer Like It
      </HomeLink>
    </HeaderLogoContainer>
  );
}

export default HeaderLogo;

const HeaderLogoContainer = styled.h1`
  display: block;
  height: 100%;
  font-size: 2.4rem;
  font-weight: 600;
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLogoIcon = styled(LogoIcon)`
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 1rem;
  fill: ${({ theme }) => theme.color.primary};
`;
