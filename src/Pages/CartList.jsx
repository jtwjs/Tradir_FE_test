import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'Components/Layout/Layout';
import BeerTable from 'Components/BeerTable/BeerTable';

import { removeCartItem, setCartColumnOrder } from 'Modules/cardModule';
import { cartStorage } from 'Utils/storage';
import CartBtn from 'Components/BeerTable/CartBtn/CartBtn';

import { ReactComponent as RemoveCartIcon } from 'Assets/icons/ic_remove_cart.svg';

function CartList() {
  const dispatch = useDispatch();
  const { cartList, columnOrder } = useSelector(({ cartReducer }) => ({
    cartList: cartReducer.cartList,
    columnOrder: cartReducer.columnOrder,
  }));

  const handleDragColumnOrder = useCallback(
    (sourceIndex, destinationIndex) => {
      const OrderedColumn = [...columnOrder];
      OrderedColumn.splice(sourceIndex, 1);
      OrderedColumn.splice(destinationIndex, 0, columnOrder[sourceIndex]);
      dispatch(setCartColumnOrder(OrderedColumn));
    },
    [columnOrder, dispatch],
  );

  const handleClickAction = useCallback(
    (event, rowData) => {
      event.stopPropagation();
      dispatch(removeCartItem(rowData.id));
    },
    [cartList],
  );

  const handleEnterAction = useCallback(
    (e, data) => {
      e.keyCode === 13 && handleClickAction(e, data);
    },
    [cartList],
  );

  useEffect(() => {
    cartStorage.save(cartList);
  }, [cartList]);

  const renderProps = ({ action, data }) => (
    <CartBtn
      onClick={(e) => action.onClick(e, data)}
      onKeyDown={(e) => handleEnterAction(e, data)}
      aria-label="장바구니 삭제">
      <StyledRemoveIcon />
    </CartBtn>
  );

  return (
    <Layout>
      <BeerListSection>
        <Title>Cart List</Title>
        <BeerTable
          columnOrder={columnOrder}
          data={cartList}
          ActionComponent={renderProps}
          handleDragColumnOrder={handleDragColumnOrder}
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
