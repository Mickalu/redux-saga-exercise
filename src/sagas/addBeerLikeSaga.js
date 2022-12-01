import { put, select } from "redux-saga/effects";

import { ADD_BEER_LIKE, setCurrentBeerIndex } from "../actions";
import { getCurrentIndex } from "../selectors";

export default function* addLikesSaga (action) {
  yield put({ type: ADD_BEER_LIKE, beerId: action.beerId});

  // next()
  const currentIndex = yield select(getCurrentIndex);
  yield put(setCurrentBeerIndex(currentIndex + 1));
};

