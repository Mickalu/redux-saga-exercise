import { call, put, select } from 'redux-saga/effects';

import { fetchingBeers, receiveSession, receiveBeers } from '../actions';
import { isFetchingBeers, settings as settingsSelector } from '../selectors';
import { getBeers, startSession as apiStartSession } from '../api';
import fetchStartSession from "./startSessionSaga";
import fetchBeersSaga from "./fetchBeersSaga";
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
  const fetchBeerGenerator = fetchBeersSaga();

  const paramIsFetchingTrue = { session: { id: "1" } };
  const beers = {
    beers: {
      name: "beer",
    }
  }

  it('should fetch beers if it is not already fetching', () => {
    it("get settings from state", () => {
      const selectSettingsInfo = fetchBeerGenerator.next();
      expect(selectSettingsInfo.value).to.be.deep.equal(select(settingsSelector));
    });

    it("Change the state.isFetching value to true", () => {
      const putFetchingBeersTrue = fetchBeerGenerator.next(paramIsFetchingTrue);
      expect(putFetchingBeersTrue.value).to.be.deep.equal(put(fetchingBeers(true)))
    });

    it("should run get request for getting beers", () => {
      const callGetBeers = fetchBeerGenerator.next();
      expect(callGetBeers.value).to.be.deep.equal(call(getBeers, "1"));
    });

    it("Change the state.isFetching value to true", () => {
      const putFetchingBeersFalse = fetchBeerGenerator.next(beers);
      expect(putFetchingBeersFalse.value).to.be.deep.equal(put(fetchingBeers(false)));
    });

    it("put beers from api into the state", () => {
      const putReceiveBeers = fetchBeerGenerator.next();
      expect(putReceiveBeers.value).to.be.deep.equal(put(receiveBeers(beers)));
    })
  });
});
