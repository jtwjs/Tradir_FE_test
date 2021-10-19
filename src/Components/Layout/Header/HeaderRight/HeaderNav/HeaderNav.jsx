import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'Assets/icons/ic_close.svg';

HeaderNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

function HeaderNav({ isOpen, handleClose }) {
  const history = useHistory();

  const isActiveLink = (path) => {
    const {
      location: { pathname },
    } = history;
    if (Array.isArray(path)) {
      return path.indexOf(pathname.toLowerCase()) !== -1 ? 1 : 0;
    } else {
      return path === pathname.toLowerCase() ? 1 : 0;
    }
  };

  return (
    <HeaderNavContainer isOpen={isOpen}>
      <h2 className="a11y">메뉴</h2>
      <CloseBtn type="button" aria-label="메뉴 닫기 버튼" onClick={handleClose}>
        <StyledCloseIcon />
      </CloseBtn>
      <NavList>
        <NavItem>
          <NavLink to="/home" active={isActiveLink(['/', '/home'])}>
            <NavText>Home</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/beerlist" active={isActiveLink('/beerlist')}>
            <NavText>Beer List</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cart" active={isActiveLink('/cart')}>
            <NavText>Cart</NavText>
          </NavLink>
        </NavItem>
      </NavList>
    </HeaderNavContainer>
  );
}

export default HeaderNav;

const HeaderNavContainer = styled.nav.attrs(({ isOpen }) => ({
  transform: isOpen ? 'translate(0)' : 'translate(100%)',
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4.6rem 0;
  background-color: ${({ theme }) => theme.color.bg};
  transform: ${({ transform }) => transform};
  transition: transform ease-in-out 0.2s;
  z-index: 1000;

  @media screen and ${({ theme }) => theme.device.tablet} {
    position: static;
    margin-right: 5rem;
    padding: 0;
    transform: none;
  }
`;

const NavList = styled.ul`
  width: 100%;
  height: 100%;

  @media screen and ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;

const NavItem = styled.li`
  width: 100%;

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme, active }) =>
    active ? theme.color.pink : theme.color.primary};
  background-color: ${({ theme, active }) =>
    active ? theme.color.primary : theme.color.bg};
  cursor: pointer;
  transition: color ease-in-out 0.2s, background-color ease-in-out 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.bg};
    background-color: ${({ theme }) => theme.color.primary};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    min-width: 12rem;
    height: 100%;
    padding: 0 2.5rem;
    font-size: 1.6rem;
    font-weight: ${({ active }) => (active ? '500' : '400')};
    color: ${({ theme, active }) =>
      active ? theme.color.primary : theme.color.gray};
    background-color: unset;

    &:hover {
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.secondary};
    }

    & > span::before {
      content: ${({ active }) => (active ? "''" : false)};
    }
  }
`;

const NavText = styled.span`
  @media screen and ${({ theme }) => theme.device.tablet} {
    position: relative;
    &::before {
      position: absolute;
      bottom: 1px;
      right: 0;
      width: 65%;
      height: 0.6rem;
      background-color: ${({ theme }) => theme.color.pink};
      opacity: 0.8;
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3.6rem;
  height: 3.6rem;

  @media screen and ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  fill: ${({ theme }) => theme.color.primary};
  transform: scale(1.5);
`;
