import { ADD_BEER_LIKE } from "../actions";

const likes = (state = { likes: []}, action) => {
    switch (action.type) {
        case ADD_BEER_LIKE: {
            return {
                ...state,
                likes: [...state.likes, action.beerId]
            }
        }
    default:
        return state;
    };
};

export default likes;
