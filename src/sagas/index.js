import { takeLeading, takeEvery } from 'redux-saga/effects';

import { START_SESSION, FETCH_BEERS } from '../actions';
import fetchStartSession from './sagaSession';
import * as rootBeers from "./sagaBeers";

export default function* rootSaga() {
    yield takeLeading(START_SESSION, fetchStartSession)
    yield takeEvery(FETCH_BEERS, rootBeers.fetchBeersSaga)
};
