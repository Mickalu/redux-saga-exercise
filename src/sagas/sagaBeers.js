import { call, put, select } from "redux-saga/effects";

import { isFetchingBeers, settings } from "../selectors";
import { FETCHING_BEERS, RECEIVE_BEERS } from "../actions";
import { getBeers } from "../api";

export default function* fetchBeersSaga(){
  try{
    const fetchingBeers = yield select(isFetchingBeers);
    const settingsInfo = yield select(settings);

    if (fetchingBeers){
      return
    }

    yield put({type: FETCHING_BEERS, isFetching: true});
    const beers = yield call(getBeers, settingsInfo.session.id);

    try {
      yield put({type: FETCHING_BEERS, isFetching: false});
      yield put({type: RECEIVE_BEERS, beers: beers});
    }
    catch (error) {
      yield put({type: FETCHING_BEERS, isFetching: false});
    }

  }
  catch(error){
    console.log(error);
  }
};
