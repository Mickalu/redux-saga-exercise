import { takeLatest } from 'redux-saga';

import { START_SESSION } from '../actions';
import * as rootSagaSession from './sagaSession';

export default function* rootSaga() {
    yield takeLatest(START_SESSION, rootSagaSession.fetchStartSession)
};
