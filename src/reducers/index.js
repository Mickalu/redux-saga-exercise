
import { combineReducers } from 'redux';
import beer from './beer';
import beers from './beers';
import settings from './settings';

const reducers = combineReducers({
  beers,
  beer,
  settings,
});

export default reducers;
