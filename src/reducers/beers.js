import { RECEIVE_BEERS, FETCHING_BEERS } from '../actions';

const initState = { data: [], isFetching: false };

const beers = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_BEERS: {
      return {
        data: [...state.data, ...action.beers],
        isFetching: false,
      };
    }
    case FETCHING_BEERS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default beers;
