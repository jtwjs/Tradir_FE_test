import { darkModeStorage } from 'Utils/storage';

// Action
export const SET_DARK_MODE = 'SET_DARK_MODE';

// Action Creator
export const setDarkMode = (payload) => {
  return {
    type: SET_DARK_MODE,
    payload: {
      darkMode: payload,
    },
  };
};

// State
const INITIAL_STATE = {
  darkMode: darkModeStorage.load(),
};

// Reducer
export const darkModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload.darkMode,
      };

    default:
      return { ...state };
  }
};
