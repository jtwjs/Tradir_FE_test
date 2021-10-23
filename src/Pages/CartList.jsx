import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'Components/Layout/Layout';
import BeerTable from 'Components/BeerTable/BeerTable';

import { removeCartItem, setCartColumnHeader } from 'Modules/cardModule';
import { cartStorage } from 'Utils/storage';
import CartBtn from 'Components/BeerTable/CartBtn/CartBtn';

import { ReactComponent as RemoveCartIcon } from 'Assets/icons/ic_remove_cart.svg';

function CartList() {
  const dispatch = useDispatch();
  const { cartList, columnHeader } = useSelector(({ cartReducer }) => ({
    cartList: cartReducer.cartList,
    columnHeader: cartReducer.columnHeader,
  }));

  const handleDragColumnHeader = useCallback(
    (sourceIndex, destinationIndex) => {
      [columnHeader[sourceIndex], columnHeader[destinationIndex]] = [
        columnHeader[destinationIndex],
        columnHeader[sourceIndex],
      ];

      dispatch(setCartColumnHeader(columnHeader));
    },
    [columnHeader, dispatch],
  );

  const handleClickAction = useCallback(
    (event, rowData) => {
      event.stopPropagation();
      dispatch(removeCartItem(rowData.id));
    },
    [cartList],
  );

  useEffect(() => {
    cartStorage.save(cartList);
  }, [cartList]);

  const renderProps = ({ action, data }) => (
    <CartBtn
      onClick={(e) => action.onClick(e, data)}
      aria-label="장바구니 삭제">
      <StyledRemoveIcon />
    </CartBtn>
  );

  return (
    <Layout>
      <BeerListSection>
        <Title>Cart List</Title>
        <BeerTable
          columnHeader={columnHeader}
          data={cartList}
          ActionComponent={renderProps}
          handleDragColumnHeader={handleDragColumnHeader}
          handleClickAction={handleClickAction}
        />
      </BeerListSection>
    </Layout>
  );
}

export default CartList;

const BeerListSection = styled.section``;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.primary};
`;

const StyledRemoveIcon = styled(RemoveCartIcon)`
  fill: ${({ theme }) => theme.color.primary};
`;
