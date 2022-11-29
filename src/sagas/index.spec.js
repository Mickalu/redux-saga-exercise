import { call, put } from 'redux-saga/effects';

import { expect } from 'chai';
import { getBeers, startSession as apiStartSession } from '../api';
import {
  fetchingBeers, receiveSession, FETCHING_BEERS, RECEIVE_BEERS,
} from '../actions';
import { fetchBeers, startSession } from '.';
import { isFetchingBeers, settings as settingsSelector } from '../selectors';

describe('#Saga: startSession', () => {
  it('should start a session', () => {
    const session = { session: 1 };
    const startSessionGenerator = startSession();

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
