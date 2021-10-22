import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

CartBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

function CartBtn({ children, onClick, ...restProps }) {
  return (
    <CartBtnContainer type="button" onClick={onClick} {...restProps}>
      {children}
    </CartBtnContainer>
  );
}

export default CartBtn;

const CartBtnContainer = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray};

    & > svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;
