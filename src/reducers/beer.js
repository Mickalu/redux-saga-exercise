import { INCREMENT_INDEX_BEER } from '../actions';

const beer = (state = { currentIndex: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_INDEX_BEER:
      return {
        currentIndex: state.currentIndex + 1,
      };
    default:
      return state;
  }
};

export default beer;
