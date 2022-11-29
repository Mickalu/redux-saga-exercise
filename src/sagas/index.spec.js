
import { call, put, select } from 'redux-saga/effects';

import { fetchingBeers, receiveSession, receiveBeers, FETCHING_BEERS, RECEIVE_BEERS } from '../actions';
import { fetchBeers, startSession } from '.';
import { isFetchingBeers, settings as settingsSelector } from '../selectors';
import { getBeers, startSession as apiStartSession } from '../api';
import  fetchStartSession  from "./sagaSession";
import { fetchBeersSaga } from "./sagaBeers";
import { expect } from 'chai'


describe('#Saga: startSession', () => {
  it('should start a session', () => {
    const session = { session: 1 };
    const startSessionGenerator = fetchStartSession();

    const callApiStartSession = startSessionGenerator.next();
    expect(callApiStartSession.value).to.be.deep.equal(call(apiStartSession));

    const putStartSession = startSessionGenerator.next(session);
    expect(putStartSession.value).to.be.deep.equal(put(receiveSession(session)));
  })
})

describe('#Saga: fetchBeers', () => {
  it('should fetch beers if it is not already fetching', () => {
    const fetchBeerGenerator = fetchBeersSaga();

    const paramIsFetchingTrue = { session: { id: "1"} };
    const fetchingBeersValue = false;
    const beers = { beers: {
      name: "beer",
    }}

    const selectFetchingBeer = fetchBeerGenerator.next();
    expect(selectFetchingBeer.value).to.be.deep.equal(select(isFetchingBeers));

    const selectSettingsInfo = fetchBeerGenerator.next(fetchingBeersValue);
    expect(selectSettingsInfo.value).to.be.deep.equal(select(settingsSelector));

    const putFetchingBeersTrue = fetchBeerGenerator.next(paramIsFetchingTrue);
    expect(putFetchingBeersTrue.value).to.be.deep.equal(put(fetchingBeers(true)))

    const callGetBeers = fetchBeerGenerator.next();
    expect(callGetBeers.value).to.be.deep.equal(call(getBeers, "1"));

    const putFetchingBeersFalse = fetchBeerGenerator.next(beers); // put init beers
    expect(putFetchingBeersFalse.value).to.be.deep.equal(put(fetchingBeers(false)));

    const putReceiveBeers = fetchBeerGenerator.next();
    expect(putReceiveBeers.value).to.be.deep.equal(put(receiveBeers(beers)));

  });

  it('should NOT fetch beers if it is already fetching beers', () => {
    const fetchingBeersValue = true;
    const fetchBeerGenerator = fetchBeersSaga();

    const selectFetchingBeer = fetchBeerGenerator.next();
    expect(selectFetchingBeer.value).to.be.deep.equal(select(isFetchingBeers));

    const selectSettingsInfo = fetchBeerGenerator.next(fetchingBeersValue);
    expect(selectSettingsInfo.value).to.be.deep.equal(select(settingsSelector));

    const returnSaga = fetchBeerGenerator.next();
    expect(returnSaga.value).to.be.deep.equal();
  })
})
