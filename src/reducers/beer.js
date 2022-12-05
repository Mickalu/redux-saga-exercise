import { INCREMENT_INDEX_BEER } from '../actions';

const initState = { currentIndex: 0 };

const beer = (state = initState , action) => {
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
