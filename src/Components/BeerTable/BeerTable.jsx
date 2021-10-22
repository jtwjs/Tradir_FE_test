import React, { useState, useCallback, forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';
import MaterialTable from 'material-table';
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
} from '@material-ui/icons';

import ToolBar from 'Components/BeerTable/ToolBar/ToolBar';
import CartBtn from 'Components/BeerTable/CartBtn/CartBtn';

import { ReactComponent as AddCartIcon } from 'Assets/icons/ic_add_cart.svg';
// import { ReactComponent as RemoveCartIcon } from 'Assets/icons/ic_remove_cart.svg';

BeerTable.propTypes = {
  columnHeader: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  handleDragColumnHeader: PropTypes.func.isRequired,
};

BeerTable.defaultProps = {
  data: [],
};

function BeerTable({ columnHeader, data, handleDragColumnHeader }) {
  const [filterList, setFilterList] = useState([]);
  const theme = useTheme();
  console.log('filterList', filterList);

  const handleToggleFilter = useCallback(
    ({ target }) => {
      const newFilterList = target.checked
        ? [...filterList, { ...target.dataset }]
        : filterList.filter((item) => item.min !== target.dataset.min);
      setFilterList(newFilterList);
    },
    [filterList],
  );

  const dataFilter = (data, filterList) => {
    if (filterList.length === 0) {
      return data;
    }
    const result = data.filter(({ abv }) => {
      let isEligible = false;
      filterList.forEach(({ min, max }) => {
        if (max) {
          if (+min <= abv && +max >= abv) {
            isEligible = true;
          }
        } else {
          if (+min <= abv) {
            isEligible = true;
          }
        }
      });

      return isEligible;
    });
    console.log('resut', result);

    return result;
  };

  const filteredData = dataFilter(data, filterList);

  return (
    <BeerTableContainer>
      <MaterialTable
        columns={columnHeader}
        data={filteredData}
        icons={tableIcons}
        actions={[
          {
            icon: 'save',
            onClick: (event, rowData) => {
              // Do save operation
              console.log('event', event);
              console.log('rowData', rowData);
            },
          },
        ]}
        components={{
          Action: ({ action, data }) => (
            <CartBtn
              onClick={(e) => action.onClick(e, data)}
              aria-label="장바구니 추가">
              <StyledAddCartIcon />
            </CartBtn>
          ),
          Toolbar: () => (
            <ToolBar
              filterList={filterList}
              handleToggleFilter={handleToggleFilter}
            />
          ),
        }}
        options={{
          actionsColumnIndex: -1,
          search: false,
          paginationType: 'stepped',
          sorting: false,
          headerStyle: {
            fontSize: '1.4rem',
            fontWeight: '600',
            color: theme.color.bg,
            backgroundColor: theme.color.pink,
          },
          rowStyle: {
            justifyContent: 'center',
          },
        }}
        style={{
          width: '100%',
          padding: '0 1em',
          color: theme.color.primary,
          backgroundColor: theme.color.bg,
          boxShadow: theme.boxShadow.table,
        }}
        localization={{
          header: {
            actions: 'Cart',
          },
          body: {
            emptyDataSourceMessage: 'No records to display',
          },
        }}
        onColumnDragged={handleDragColumnHeader}
      />
    </BeerTableContainer>
  );
}

export default memo(BeerTable);

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

export const columnHeaderData = [
  {
    title: 'Thumbnail',
    field: 'image',
    render: (rowData) => (
      <img
        src={rowData.image_url}
        alt="맥주 썸네일 이미지"
        style={{ width: '4rem', height: '4rem', objectFit: 'contain' }}
      />
    ),
  },
  { title: 'Name', field: 'name' },
  { title: 'Abv', field: 'abv' },
  { title: 'Tagline', field: 'tagline' },
];

const BeerTableContainer = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 1rem 0;

  & tfoot > tr > td {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.primary};

    & button {
      &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
      }
    }

    & svg {
      color: ${({ theme }) => theme.color.primary};
    }

    & span {
      color: ${({ theme }) => theme.color.secondary};

      & button.MuiButton-contained.Mui-disabled {
        background-color: ${({ theme }) => theme.color.gray};
      }

      & button.MuiButton-textSizeSmall {
        &:hover {
          background-color: ${({ theme }) => theme.color.secondary};
        }

        .MuiButton-label {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
`;

const StyledAddCartIcon = styled(AddCartIcon)`
  fill: ${({ theme }) => theme.color.primary};
`;
// const StyledRemoveCartIcon = styled(RemoveCartIcon)``;
