import { takeLeading, takeEvery } from 'redux-saga';

import { START_SESSION, FETCH_BEERS } from '../actions';
import * as rootSagaSession from './sagaSession';
import * as rootBeers from "./sagaBeers";

export default function* rootSaga() {
    yield takeLeading(START_SESSION, rootSagaSession.fetchStartSession)
    yield takeEvery(FETCH_BEERS, rootBeers.fetchBeersSaga)
};
