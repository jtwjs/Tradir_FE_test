import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { enableES5 } from 'immer';

import { darkModeReducer } from './darkModeModule';

enableES5();

const rootReducer = combineReducers({ darkModeReducer });

export default rootReducer;

export function* rootSaga() {
  yield all([]);
}
