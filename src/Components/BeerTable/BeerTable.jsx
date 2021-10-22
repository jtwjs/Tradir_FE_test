import React, { forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';
import MaterialTable from 'material-table';
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
} from '@material-ui/icons';

import { ReactComponent as AddCartIcon } from 'Assets/icons/ic_add_cart.svg';
// import { ReactComponent as RemoveCartIcon } from 'Assets/icons/ic_remove_cart.svg';

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

function BeerTable() {
  const theme = useTheme();

  return (
    <BeerTableContainer>
      <MaterialTable
        actions={[
          {
            icon: () => <StyledAddCartIcon />,
            tooltip: 'add to cart',
            onClick: (event, rowData) => {
              // Do save operation
              console.log('event', event);
              console.log('rowData', rowData);
            },
          },
        ]}
        columns={[
          { title: 'Thumbnail', field: 'image' },
          { title: 'Name', field: 'name' },
          { title: 'Abv', field: 'abv' },
          { title: 'Tagline', field: 'tagline' },
        ]}
        data={[
          { image: 'Mehmet', name: 'abv', abv: 1987, tagline: 63 },
          { image: 'Mehmet', name: 'abv', abv: 1987, tagline: 63 },
          { image: 'Mehmet', name: 'abv', abv: 1987, tagline: 63 },
        ]}
        icons={tableIcons}
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
      />
    </BeerTableContainer>
  );
}

export default BeerTable;

const BeerTableContainer = styled.div`
  max-width: 100%;
	width: 100%;
	padding: 1rem 0;
	
  & tfoot > tr > td {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.primary};

    & svg {
      color: ${({ theme }) => theme.color.primary};
    }
	  
    & span {
	    color: ${({ theme }) => theme.color.secondary};
	    
		  & button.MuiButton-contained.Mui-disabled {
	      background-color: ${({ theme }) => theme.color.gray};
	    }
    }
    }
  }
`;

const StyledAddCartIcon = styled(AddCartIcon)`
  fill: ${({ theme }) => theme.color.primary};
`;
// const StyledRemoveCartIcon = styled(RemoveCartIcon)``;
