import { put, select } from "redux-saga/effects";

import { ADD_BEER_LIKE, incrementIndexBeer } from "../actions";
import { getCurrentIndex } from "../selectors";

export function* addLikesSaga (action) {
  yield put({ type: ADD_BEER_LIKE, beerId: action.beerId});

  const currentIndex = yield select(getCurrentIndex)
  yield put(incrementIndexBeer(currentIndex));
};

export function* nextBeerSaga () {
  const currentIndex = yield select(getCurrentIndex)
  yield put(incrementIndexBeer(currentIndex));
};
