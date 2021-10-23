import { cartStorage } from 'Utils/storage';
import { columnHeaderData } from 'Components/BeerTable/BeerTable';

// Action
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const SET_CART_COLUMN_HEADER = 'SET_CART_COLUMN_HEADER';

// Action Creator
export const addCartItem = (payload) => {
  return {
    type: ADD_CART_ITEM,
    payload: {
      cartItem: payload,
    },
  };
};

export const removeCartItem = (payload) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: {
      cartId: payload,
    },
  };
};

export const setCartColumnHeader = (payload) => {
  return {
    type: SET_CART_COLUMN_HEADER,
    payload: {
      columnHeader: payload,
    },
  };
};

// State
const INITIAL_STATE = {
  cartList: cartStorage.load() || [],
  columnHeader: columnHeaderData,
};

// Reducer
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartList: [...state.cartList, action.payload.cartItem],
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.id !== action.payload.cartId,
        ),
      };

    case SET_CART_COLUMN_HEADER:
      return {
        ...state,
        columnHeader: action.payload.columnHeader,
      };

    default:
      return state;
  }
};
