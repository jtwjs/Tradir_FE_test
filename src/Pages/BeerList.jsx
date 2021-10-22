import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'Components/Layout/Layout';
import BeerTable from 'Components/BeerTable/BeerTable';

import {
  getBeerListRequest,
  setBeerColumnHeader,
} from 'Modules/beerListModule';

function BeerList() {
  const dispatch = useDispatch();
  const { beerList, columnHeader } = useSelector(({ beerListReducer }) => ({
    beerList: beerListReducer.beerList,
    columnHeader: beerListReducer.columnHeader,
  }));

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

  useEffect(() => {
    dispatch(getBeerListRequest());
  }, []);

  return (
    <Layout>
      <BeerListSection>
        <Title>Beer List</Title>
        <BeerTable
          columnHeader={columnHeader}
          data={beerList}
          handleDragColumnHeader={handleDragColumnHeader}
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
