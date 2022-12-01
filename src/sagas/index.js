import { takeLeading } from 'redux-saga/effects';

import fetchStartSession from './startSessionSaga';
import addLikesSaga from "./addBeerLikeSaga";
import * as rootBeers from "./fetchBeersSaga";
import { START_SESSION, FETCH_BEERS, ADD_LIKE } from '../actions';

export default function* rootSaga() {
  yield takeLeading(START_SESSION, fetchStartSession)
  yield takeLeading(FETCH_BEERS, rootBeers.fetchBeersSaga)
  yield takeLeading(ADD_LIKE, addLikesSaga)
};
