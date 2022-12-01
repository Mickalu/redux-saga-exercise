import { put, call } from 'redux-saga/effects';

import { RECEIVE_SESSION } from '../actions';
import { startSession } from '../api';

export default function* startSessionSaga() {
  try {
    const session = yield call(startSession);
    yield put({ type: RECEIVE_SESSION, session });
  } catch (error) {
    console.log(error);
  };
};
