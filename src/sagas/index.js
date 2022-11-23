import { spawn } from 'redux-saga/effects'

import sessionSaga from './sagaSession';

export default function* rootSaga() {
    yield spawn(sessionSaga)
};
