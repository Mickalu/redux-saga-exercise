import { ADD_LIKE } from "../actions";

const likes = (state = { likes: [] }, action) => {
    switch (action.type) {
        case ADD_LIKE: {
            console.log(state);
            return state;
        }
    default:
        return state;
    };
};

export default likes;
