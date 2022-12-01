import { takeLeading } from 'redux-saga/effects';

import { START_SESSION, FETCH_BEERS, ADD_LIKE } from '../actions';
import addLikesSaga from "./addBeerLikeSaga";
import fetchBeersSaga from "./fetchBeersSaga";
import startSessionSaga from './startSessionSaga';

export default function* rootSaga() {
  yield takeLeading(START_SESSION, startSessionSaga)
  yield takeLeading(FETCH_BEERS, fetchBeersSaga)
  yield takeLeading(ADD_LIKE, addLikesSaga)
};
