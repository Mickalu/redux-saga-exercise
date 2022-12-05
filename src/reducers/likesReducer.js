import { ADD_BEER_LIKE } from "../actions";

const initState = { data: [] };

const likes = (state = initState, action) => {
  switch (action.type) {
    case ADD_BEER_LIKE: {
      return {
        ...state,
        data: [...state.data, action.beerId],
      };
    }
    default:
      return state;
  };
};

export default likes;
