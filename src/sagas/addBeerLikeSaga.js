import { put, select } from "redux-saga/effects";

import { ADD_BEER_LIKE } from "../actions";

export default function* addLikesSaga () {
    yield put({ type: ADD_BEER_LIKE });
};

