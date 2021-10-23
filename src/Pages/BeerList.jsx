import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'Components/Layout/Layout';
import BeerTable from 'Components/BeerTable/BeerTable';
import CartBtn from 'Components/BeerTable/CartBtn/CartBtn';

import { ReactComponent as AddCartIcon } from 'Assets/icons/ic_add_cart.svg';

import {
  getBeerListRequest,
  setBeerColumnHeader,
} from 'Modules/beerListModule';
import { addCartItem } from 'Modules/cardModule';
import { cartStorage } from 'Utils/storage';

function BeerList() {
  const dispatch = useDispatch();
  const { beerList, columnHeader, cartList } = useSelector(
    ({ beerListReducer, cartReducer }) => ({
      beerList: beerListReducer.beerList,
      columnHeader: beerListReducer.columnHeader,
      cartList: cartReducer.cartList,
    }),
  );

  const handleDragColumnHeader = useCallback(
    (sourceIndex, destinationIndex) => {
      [columnHeader[sourceIndex], columnHeader[destinationIndex]] = [
        columnHeader[destinationIndex],
        columnHeader[sourceIndex],
      ];

      dispatch(setBeerColumnHeader(columnHeader));
    },
    [columnHeader, dispatch],
  );

  const handleClickAction = useCallback(
    (event, rowData) => {
      event.stopPropagation();
      cartList.find((item) => item.id === rowData.id)
        ? window.alert('이미 등록됫다..')
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
          columnHeader={columnHeader}
          data={beerList}
          ActionComponent={renderProps}
          handleDragColumnHeader={handleDragColumnHeader}
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
