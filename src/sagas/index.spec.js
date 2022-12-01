import { call, put, select } from 'redux-saga/effects';

import { fetchingBeers, receiveSession, receiveBeers } from '../actions';
import { settings as settingsSelector } from '../selectors';
import { getBeers, startSession as apiStartSession } from '../api';
import fetchStartSession from "./startSessionSaga";
import fetchBeersSaga from "./fetchBeersSaga";
import { expect } from 'chai'

test("Saga: startSession should call api session", () => {
  const startSessionGenerator = fetchStartSession();

  const callApiStartSession = startSessionGenerator.next();

  expect(callApiStartSession.value).to.be.deep.equal(call(apiStartSession));
});

test('Saga: startSession should implement session status to the state', () => {
  const startSessionGenerator = fetchStartSession();
  const session = { session: 1 };

  startSessionGenerator.next();

  const putStartSession = startSessionGenerator.next(session);

  expect(putStartSession.value).to.be.deep.equal(put(receiveSession(session)));
});

const paramIsFetchingTrue = { session: { id: "1" } };
const beers = {
  beers: {
    name: "beer",
  }
};

test("#Saga: fetchBeers  get settings from state", () => {
  const fetchBeerGenerator = fetchBeersSaga();

  const selectSettingsInfo = fetchBeerGenerator.next();

  expect(selectSettingsInfo.value).to.be.deep.equal(select(settingsSelector));
});

test("#Saga: fetchBeers Change the state.isFetching value to true", () => {
  const fetchBeerGenerator = fetchBeersSaga();

  fetchBeerGenerator.next();

  const putFetchingBeersTrue = fetchBeerGenerator.next(paramIsFetchingTrue);

  expect(putFetchingBeersTrue.value).to.be.deep.equal(put(fetchingBeers(true)))
});

test("#Saga: fetchBeers should run get request for getting beers", () => {
  const fetchBeerGenerator = fetchBeersSaga();

  fetchBeerGenerator.next();
  fetchBeerGenerator.next();

  const callGetBeers = fetchBeerGenerator.next();

  expect(callGetBeers.value).to.be.deep.equal(call(getBeers, "1"));
});

test("#Saga: fetchBeers Change the state.isFetching value to true", () => {
  const fetchBeerGenerator = fetchBeersSaga();

  fetchBeerGenerator.next();
  fetchBeerGenerator.next();
  fetchBeerGenerator.next();

  const putFetchingBeersFalse = fetchBeerGenerator.next(beers);

  expect(putFetchingBeersFalse.value).to.be.deep.equal(put(fetchingBeers(false)));
});

test("#Saga: fetchBeers put beers from api into the state", () => {
  const fetchBeerGenerator = fetchBeersSaga();

  fetchBeerGenerator.next();
  fetchBeerGenerator.next();
  fetchBeerGenerator.next();
  fetchBeerGenerator.next();

  const putReceiveBeers = fetchBeerGenerator.next();

  expect(putReceiveBeers.value).to.be.deep.equal(put(receiveBeers(beers)));
});
