import { takeLeading, takeEvery } from 'redux-saga/effects';

import { START_SESSION, FETCH_BEERS, ADD_LIKE } from '../actions';
import fetchStartSession from './sagaSession';
import * as rootBeers from "./sagaBeers";
import addLikesSaga from "./addBeerLikeSaga";

export default function* rootSaga() {
    yield takeLeading(START_SESSION, fetchStartSession)
    yield takeLeading(FETCH_BEERS, rootBeers.fetchBeersSaga)
    yield takeLeading(ADD_LIKE, addLikesSaga)
};
