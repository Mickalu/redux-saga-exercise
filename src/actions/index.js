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

/* I'm an action creator (LEVEL 1!)  */
export const receiveSession = (session:Object) => ({
  type: RECEIVE_SESSION,
  session
})

export const fetchingBeers = (isFetching:boolean) => ({
  type: FETCHING_BEERS,
  isFetching
})

export const receiveBeers = (beers:Array<Object>) => ({
  type: RECEIVE_BEERS,
  beers
})

export const setCurrentBeerIndex = (currentIndex:number) => ({
  type: CURRENT_BEER_INDEX,
  currentIndex
})

export const fetchBeers = () => ({
  type: FETCH_BEERS,
});

export const startSession = () => ({
  type: START_SESSION,
});
