
import { takeLatest } from 'redux-saga';

import { START_SESSION } from '../actions';
import fetchStartSession from './sagaSession';

export default function* rootSaga() {
  yield takeLatest(START_SESSION, fetchStartSession);
}
