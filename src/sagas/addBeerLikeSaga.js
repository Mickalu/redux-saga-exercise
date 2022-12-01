import { call, put, select } from "redux-saga/effects";

import { ADD_BEER_LIKE, setCurrentBeerIndex } from "../actions";
import { getCurrentIndex } from "../selectors";

export function* addLikesSaga (action) {
  yield put({ type: ADD_BEER_LIKE, beerId: action.beerId});

  const currentIndex = yield select(getCurrentIndex)
  yield put(setCurrentBeerIndex(currentIndex + 1));
};

export function* nextBeer () {
  const currentIndex = yield select(getCurrentIndex)
  yield put(setCurrentBeerIndex(currentIndex + 1));
};
