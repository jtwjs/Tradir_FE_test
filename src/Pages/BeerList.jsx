import React from 'react';
import styled from 'styled-components';

import Layout from 'Components/Layout/Layout';
import BeerTable from 'Components/BeerTable/BeerTable';

function BeerList() {
  return (
    <Layout>
      <BeerListSection>
        <Title>Beer List</Title>
        <BeerTable />
      </BeerListSection>
    </Layout>
  );
}

export default BeerList;

const BeerListSection = styled.section`
  padding-top: 5rem;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.primary};
`;
