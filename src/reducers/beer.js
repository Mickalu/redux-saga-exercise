
import { CURRENT_BEER_INDEX } from '../actions';

const beer = (state = { currentIndex: 0 }, action) => {
  switch (action.type) {
    case CURRENT_BEER_INDEX:
      return {
        ...state,
        currentIndex: action.currentIndex,
      };
    default:
      return state;
  }
};

export default beer;
