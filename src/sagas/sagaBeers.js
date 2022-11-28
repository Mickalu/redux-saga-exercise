import { call, put, select } from "redux-saga/effects";

import { isFetchingBeers, settings } from "../selectors";
import { fetchingBeers, receiveBeers  } from "../actions";
import { getBeers } from "../api";

export default function* fetchBeersSaga(){
  try{
    const fetchingBeersValue = yield select(isFetchingBeers);
    const settingsInfo = yield select(settings);

    if (fetchingBeersValue){
      return
    }

    yield put(fetchingBeers(true));
    const beers = yield call(getBeers, settingsInfo.session.id);

    try {
      yield put(fetchingBeers(false));
      yield put(receiveBeers(beers));
    }
    catch (error) {
      yield put(fetchingBeers(false));
    }

  }
  catch(error){
    console.log(error);
  }
};
