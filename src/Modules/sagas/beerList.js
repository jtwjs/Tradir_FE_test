import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_BEER_LIST_REQUEST,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_FAILURE,
} from '../beerListModule';
import * as beerListAPI from 'Api/beerList';

function* getBeerListSaga() {
  try {
    const response = yield call(beerListAPI.getBeerList);
    yield put({
      type: GET_BEER_LIST_SUCCESS,
      payload: {
        beerList: response,
      },
    });
  } catch (err) {
    yield put({
      type: GET_BEER_LIST_FAILURE,
      payload: err.response.data,
    });
  }
}

function* watchGetBeerList() {
  yield takeLatest(GET_BEER_LIST_REQUEST, getBeerListSaga);
}

export default function* beerListSaga() {
  yield all([fork(watchGetBeerList)]);
}
