// @flow
import * as api from '../api';

export const CURRENT_BEER_INDEX = 'CURRENT_BEER_INDEX';
export const FETCH_BEERS = 'FETCH_BEERS';
export const FETCHING_BEERS = 'FETCHING_BEERS';
export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const START_SESSION = 'START_SESSION';
export const ADD_LIKE = 'ADD_LIKE';
export const ADD_BEER_LIKE= 'ADD_BEER_LIKE';
export const NEXT_BEER = 'NEXT_BEER';

/* I'm an action creator (LEVEL 1!)  */
export const receiveSession = (session) => ({
  type: RECEIVE_SESSION,
  session,
});

export const fetchingBeers = (isFetching) => ({
  type: FETCHING_BEERS,
  isFetching,
});

export const receiveBeers = (beers) => ({
  type: RECEIVE_BEERS,
  beers,
});

export const setCurrentBeerIndex = (currentIndex) => ({
  type: CURRENT_BEER_INDEX,
  currentIndex,
});

export const addLike = (beerId) => ({
  type: ADD_LIKE,
  beerId,
});

export const addBeerLiked = (beerId) => ({
  type: ADD_BEER_LIKE,
  beerId,
});

export const nextBeer = () => ({
  type: NEXT_BEER,
});

// Tip: you must replace the following two functions
// with two simpler actions... level 1 maybe?

/* I'm an action that returns promises (LEVEL 2!)  */
export const startSessionAction = () => ({
  type: START_SESSION,
});

/* I'm an action that dispatches other actions (LEVEL 3!)  */
export const fetchBeersAction = () => ({
  type: FETCH_BEERS,
});

export const startSession = () => ({
  type: START_SESSION,
});
