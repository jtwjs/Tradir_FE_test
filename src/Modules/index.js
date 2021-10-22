import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { enableES5 } from 'immer';

import { darkModeReducer } from './darkModeModule';
import { beerListReducer } from './beerListModule';
import beerListSaga from './sagas/beerList';

enableES5();

const rootReducer = combineReducers({ darkModeReducer, beerListReducer });

export default rootReducer;

export function* rootSaga() {
  yield all([fork(beerListSaga)]);
}
