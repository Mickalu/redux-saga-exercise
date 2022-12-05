import { put, select } from "redux-saga/effects";

import { ADD_BEER_LIKE, incrementIndexBeer } from "../actions";

export function* addLikesSaga (action) {
  yield put({ type: ADD_BEER_LIKE, beerId: action.beerId});

  yield put(incrementIndexBeer());
};

export function* nextBeerSaga () {
  yield put(incrementIndexBeer());
};
