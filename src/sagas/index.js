import { takeLeading, takeEvery } from 'redux-saga/effects';

import { START_SESSION, FETCH_BEERS } from '../actions';
import startSessionSaga from './sagaSession';
import fetchBeersSaga from "./sagaBeers";

export default function* rootSaga() {
    yield takeLeading(START_SESSION, startSessionSaga)
    yield takeLeading(FETCH_BEERS, fetchBeersSaga)
};
