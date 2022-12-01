import { call, put } from 'redux-saga/effects';

import { receiveSession } from '../actions';

import { startSession as apiStartSession } from '../api';
import  fetchStartSession  from "./startSessionSaga";
import { expect } from 'chai';


describe('#Saga: startSession', () => {
  it('should start a session', () => {
    const session = { session: 1 };
    const startSessionGenerator = fetchStartSession();

    const callApiStartSession = startSessionGenerator.next();
    expect(callApiStartSession.value).to.be.deep.equal(call(apiStartSession));

    const putStartSession = startSessionGenerator.next(session);
    expect(putStartSession.value).to.be.deep.equal(put(receiveSession(session)));
  });
});

describe('#Saga: fetchBeers', () => {
  it('should fetch beers if it is not already fetching', () => {

  });

  it('should NOT fetch beers if it is already fetching beers', () => {

  });
});
