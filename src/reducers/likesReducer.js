import { ADD_BEER_LIKE } from "../actions";

const likes = (state = { data: [] } , action) => {
    switch (action.type) {
        case ADD_BEER_LIKE: {
            return {
                ...state,
                data: [...state.data, action.beerId]
            };
        }
        default:
            return state;
    };
};

export default likes;
