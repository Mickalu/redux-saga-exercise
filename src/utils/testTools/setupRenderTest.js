import { combineReducers, configureStore } from '@reduxjs/toolkit';

import likes from "../../reducers/likesReducer";
import beers from "../../reducers/beers";
import beer from "../../reducers/beer";
import settings from "../../reducers/settings";

const rootTestReducer = combineReducers({
  likes: likes,
  beers: beers,
  beer: beer,
  settings: settings,
})
;

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootTestReducer,
    preloadedState,
  })
};
