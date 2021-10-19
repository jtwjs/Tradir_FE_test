import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'Assets/icons/ic_logo.svg';

function HeaderLogo() {
  return (
    <HeaderLogoContainer>
      <HomeLink href="/">
        <StyledLogoIcon />
        <LogoText>Beer Like It</LogoText>
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

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLogoIcon = styled(LogoIcon)`
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 1rem;
`;

const LogoText = styled.span``;
