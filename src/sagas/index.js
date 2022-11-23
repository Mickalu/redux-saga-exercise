import * as sagaSession from './sagaSession';

export default function* rootSaga() {
    yield sagaSession.fetchReceiveSession()
    yield sagaSession.fetchStartSession()
};
