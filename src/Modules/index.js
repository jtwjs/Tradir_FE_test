import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { enableES5 } from 'immer';

enableES5();

const rootReducer = combineReducers({});

export default rootReducer;

export function* rootSaga() {
  yield all([]);
}
