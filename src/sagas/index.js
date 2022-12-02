import { takeLeading } from 'redux-saga/effects';

import { START_SESSION, FETCH_BEERS, ADD_LIKE, NEXT_BEER } from '../actions';
import * as likeSaga from "./addBeerLikeSaga";
import fetchBeersSaga from "./fetchBeersSaga";
import startSessionSaga from './startSessionSaga';

export default function* rootSaga() {
  yield takeLeading(START_SESSION, startSessionSaga)
  yield takeLeading(FETCH_BEERS, fetchBeersSaga)
  yield takeLeading(ADD_LIKE, likeSaga.addLikesSaga)
  yield takeLeading(NEXT_BEER, likeSaga.nextBeerSaga)
};
