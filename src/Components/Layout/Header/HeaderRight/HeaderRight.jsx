import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import HeaderNav from './HeaderNav/HeaderNav';
import DarkModeSwitch from './DarkModeSwitch/DarkModeSwitch';

import { ReactComponent as HamburgerIcon } from 'Assets/icons/ic_hamburger.svg';

function HeaderRight() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(true);
  };

  const handleCloseNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <HeaderRightContainer>
      <HeaderNav isOpen={isOpen} handleClose={handleCloseNav} />
      <StyledDarkModeSwitch />
      <HamburgerBtn
        type="button"
        aria-label="메뉴 열기 버튼"
        onClick={handleOpenNav}>
        <StyledHamburgerIcon />
      </HamburgerBtn>
    </HeaderRightContainer>
  );
}

export default HeaderRight;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDarkModeSwitch = styled(DarkModeSwitch)`
  margin-right: 2.8rem;
`;

const HamburgerBtn = styled.button`
  width: 3.6rem;
  height: 3.6rem;

  @media screen and ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const StyledHamburgerIcon = styled(HamburgerIcon)`
  fill: ${({ theme }) => theme.color.primary};
  transform: scale(1.5);
`;
