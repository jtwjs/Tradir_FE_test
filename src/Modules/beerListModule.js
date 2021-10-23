import { columnHeaderData } from 'Components/BeerTable/BeerTable';

// Action
export const GET_BEER_LIST_REQUEST = 'GET_BEER_LIST_REQUEST';
export const GET_BEER_LIST_SUCCESS = 'GET_BEER_LIST_SUCCESS';
export const GET_BEER_LIST_FAILURE = 'GET_BEER_LIST_FAILURE';
export const SET_BEER_COLUMN_ORDER = 'SET_BEER_COLUMN_ORDER';

// Action Creator
export const getBeerListRequest = () => {
  return {
    type: GET_BEER_LIST_REQUEST,
  };
};

export const setBeerColumnOrder = (payload) => {
  return {
    type: SET_BEER_COLUMN_ORDER,
    payload: {
      columnOrder: payload,
    },
  };
};

// State
const INITIAL_STATE = {
  beerList: [],
  columnOrder: columnHeaderData.map((_, index) => index),
  error: null,
};

// Reducer
export const beerListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BEER_LIST_REQUEST:
      return state;

    case GET_BEER_LIST_SUCCESS:
      return {
        ...state,
        beerList: action.payload.beerList,
      };

    case GET_BEER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SET_BEER_COLUMN_ORDER:
      return {
        ...state,
        columnOrder: [...action.payload.columnOrder],
      };

    default:
      return { ...state };
  }
};
