import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterItem from 'Components/BeerTable/ToolBar/FilterItem/FilterItem';

ToolBar.propTypes = {
  filterList: PropTypes.array.isRequired,
  handleToggleFilter: PropTypes.func.isRequired,
};

function ToolBar({ filterList, handleToggleFilter }) {
  return (
    <ToolBarContainer>
      <FilterList>
        {filterData.map((item) => (
          <FilterItem
            key={item.id}
            name="abv"
            id={item.content}
            checked={!!filterList.find((filter) => +filter.min === item.min)}
            data-min={item.min}
            data-max={item.max}
            onChange={handleToggleFilter}>
            {item.content}
          </FilterItem>
        ))}
      </FilterList>
    </ToolBarContainer>
  );
}

export default ToolBar;

const filterData = [
  {
    id: 0,
    content: '0-1',
    min: 0,
    max: 1,
  },
  {
    id: 1,
    content: '1-2',
    min: 1,
    max: 2,
  },
  {
    id: 2,
    content: '2-3',
    min: 2,
    max: 3,
  },
  {
    id: 3,
    content: '3-4',
    min: 3,
    max: 4,
  },
  {
    id: 4,
    content: '4-5',
    min: 4,
    max: 5,
  },
  {
    id: 5,
    content: '5-6',
    min: 5,
    max: 6,
  },
  {
    id: 6,
    content: '6-7',
    min: 6,
    max: 7,
  },
  {
    id: 7,
    content: '7-8',
    min: 7,
    max: 8,
  },
  {
    id: 8,
    content: '8-9',
    min: 8,
    max: 9,
  },
  {
    id: 9,
    content: '9-10',
    min: 9,
    max: 10,
  },
  {
    id: 10,
    content: '10++',
    min: 10,
    max: null,
  },
];

const ToolBarContainer = styled.div`
  padding: 1rem 0;
`;

const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
