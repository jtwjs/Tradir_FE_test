import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

FilterItem.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

function FilterItem({ children, id, checked, onChange, ...restProps }) {
  const handleEnter = (e) => {
    const { checked, dataset } = e.target.previousSibling;
    e.keyCode === 13 && onChange(!checked, dataset);
  };

  return (
    <FilterItemContainer>
      <FilterBoxInput
        type="checkbox"
        id={id}
        checked={checked}
        tabIndex="-1"
        onChange={(e) => onChange(e.target.checked, e.target.dataset)}
        {...restProps}
      />
      <FilterBoxLabel htmlFor={id} tabIndex="0" onKeyDown={handleEnter}>
        {children}
      </FilterBoxLabel>
    </FilterItemContainer>
  );
}

export default FilterItem;

const FilterItemContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-right: 0.6rem;
  }

  input[type='checkbox']:checked + label {
    background-color: ${({ theme }) => theme.color.blue};

    &:hover {
      background-color: ${({ theme }) => theme.color.blueDark};
    }
  }
`;

const FilterBoxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
`;

const FilterBoxLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.gray};
  transition: background-color ease-in-out 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
