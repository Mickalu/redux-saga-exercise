import { put } from "redux-saga/effects";

import { ADD_LIKE } from "../actions";

export default function* addLikesSaga () {
    yield put({ type: ADD_LIKE });
};

