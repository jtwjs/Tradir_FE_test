import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'Components/Layout/Layout';
import BeerTable from 'Components/BeerTable/BeerTable';
import CartBtn from 'Components/BeerTable/CartBtn/CartBtn';

import { ReactComponent as AddCartIcon } from 'Assets/icons/ic_add_cart.svg';

import { getBeerListRequest, setBeerColumnOrder } from 'Modules/beerListModule';
import { addCartItem } from 'Modules/cardModule';
import { cartStorage } from 'Utils/storage';

function BeerList() {
  const dispatch = useDispatch();
  const { beerList, columnOrder, cartList } = useSelector(
    ({ beerListReducer, cartReducer }) => ({
      beerList: beerListReducer.beerList,
      columnOrder: beerListReducer.columnOrder,
      cartList: cartReducer.cartList,
    }),
  );

  const handleDragColumnOrder = useCallback(
    (sourceIndex, destinationIndex) => {
      const OrderedColumn = [...columnOrder];
      OrderedColumn.splice(sourceIndex, 1);
      OrderedColumn.splice(destinationIndex, 0, columnOrder[sourceIndex]);

      dispatch(setBeerColumnOrder(OrderedColumn));
    },
    [columnOrder, dispatch],
  );

  const handleClickAction = useCallback(
    (event, rowData) => {
      event.stopPropagation();
      cartList.find((item) => item.id === rowData.id)
        ? window.alert("It's already in the cart list.")
        : dispatch(addCartItem(rowData));
    },
    [cartList],
  );

  useEffect(() => {
    dispatch(getBeerListRequest());
  }, []);

  useEffect(() => {
    cartStorage.save(cartList);
  }, [cartList]);

  const renderProps = ({ action, data }) => (
    <CartBtn
      onClick={(e) => action.onClick(e, data)}
      aria-label="장바구니 추가">
      <StyledAddCartIcon />
    </CartBtn>
  );

  return (
    <Layout>
      <BeerListSection>
        <Title>Beer List</Title>
        <BeerTable
          columnOrder={columnOrder}
          data={beerList}
          ActionComponent={renderProps}
          handleDragColumnOrder={handleDragColumnOrder}
          handleClickAction={handleClickAction}
        />
      </BeerListSection>
    </Layout>
  );
}

export default BeerList;

const BeerListSection = styled.section``;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.primary};
`;

const StyledAddCartIcon = styled(AddCartIcon)`
  fill: ${({ theme }) => theme.color.primary};
`;
