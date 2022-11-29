import { combineReducers } from 'redux';

import beer from './beer';
import beers from './beers';
import settings from './settings';
import likes from "./likesReducer";

const reducers = combineReducers({
  beers,
  beer,
  settings,
  likes,
});

export default reducers;
