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
import BeerModal from 'Components/BeerTable/BeerModal/BeerModal';

BeerTable.propTypes = {
  columnOrder: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  // TODO type 찾기
  ActionComponent: PropTypes.any.isRequired,
  handleDragColumnOrder: PropTypes.func.isRequired,
  handleClickAction: PropTypes.func.isRequired,
};

function BeerTable({
  columnOrder,
  data,
  ActionComponent,
  handleDragColumnOrder,
  handleClickAction,
}) {
  const [filterList, setFilterList] = useState([]);
  const theme = useTheme();

  const handleToggleFilter = useCallback(
    (checked, dataset) => {
      const newFilterList = checked
        ? [...filterList, { ...dataset }]
        : filterList.filter((item) => item.min !== dataset.min);
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
          if (+min <= abv && +max > abv) {
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

    return result;
  };

  const filteredData = dataFilter(data, filterList);

  return (
    <BeerTableContainer>
      <MaterialTable
        columns={columnOrder.map((order) => columnHeaderData[order])}
        data={filteredData}
        icons={tableIcons}
        actions={[
          {
            icon: 'save',
            onClick: handleClickAction,
          },
        ]}
        components={{
          Toolbar: () => (
            <ToolBar
              filterList={filterList}
              handleToggleFilter={handleToggleFilter}
            />
          ),
          Action: ({ action, data }) => (
            <ActionComponent action={action} data={data} />
          ),
          Row: (props) => <BeerModal {...props} />,
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
          fontSize: '1.6rem',
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
        onColumnDragged={handleDragColumnOrder}
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
        style={{ width: '3.4rem', height: '3.4rem', objectFit: 'contain' }}
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

  & tbody {
    tr.MuiTableRow-hover {
      &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
      }
    }
    & td.MuiTableCell-body {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.gray};
    }
  }

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
