import React from 'react';
import styled from 'styled-components';

import HeaderLogo from './HeaderLogo/HeaderLogo';

function HeaderLeft() {
  return (
    <GnbLeftContainer>
      <HeaderLogo />
    </GnbLeftContainer>
  );
}

export default HeaderLeft;

const GnbLeftContainer = styled.div`
  height: 100%;
`;
