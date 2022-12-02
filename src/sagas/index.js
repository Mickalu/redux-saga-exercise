import { takeLeading, all } from 'redux-saga/effects';

import { START_SESSION, FETCH_BEERS, ADD_LIKE, NEXT_BEER } from '../actions';
import * as likeSaga from "./addBeerLikeSaga";
import fetchBeersSaga from "./fetchBeersSaga";
import startSessionSaga from './startSessionSaga';

export default function* rootSaga() {
  yield all([
    takeLeading(START_SESSION, startSessionSaga),
    takeLeading(FETCH_BEERS, fetchBeersSaga),
    takeLeading(ADD_LIKE, likeSaga.addLikesSaga),
    takeLeading(NEXT_BEER, likeSaga.nextBeerSaga),
  ]);
};
