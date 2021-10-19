import React from 'react';
import styled from 'styled-components';

import HeaderLeft from 'Components/Layout/Header/HeaderLeft/HeaderLeft';
import HeaderRight from 'Components/Layout/Header/HeaderRight/HeaderRight';

Header.propTypes = {};

function Header() {
  return (
    <HeaderContainer>
      <HeaderContentWrap>
        <HeaderLeft />
        <HeaderRight />
      </HeaderContentWrap>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.4rem;
`;

const HeaderContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 140rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  color: ${({ theme }) => theme.color.primary};
`;
