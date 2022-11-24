import { takeEvery } from 'redux-saga';

import { START_SESSION } from '../actions';
import * as rootSagaSession from './sagaSession';

export default function* rootSaga() {
    yield takeEvery(START_SESSION, rootSagaSession.fetchStartSession)
};
