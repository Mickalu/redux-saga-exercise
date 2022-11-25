
import { takeLeading } from 'redux-saga/effects';

import { START_SESSION } from '../actions';
import fetchStartSession from './sagaSession';

export default function* rootSaga() {
  yield takeLeading(START_SESSION, fetchStartSession);
}
