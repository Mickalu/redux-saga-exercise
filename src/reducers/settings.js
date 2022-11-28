import { RECEIVE_SESSION } from '../actions';

const settings = (state = { session: {} }, action) => {
  switch (action.type) {
    case RECEIVE_SESSION:
      return { ...state, session: action.session };
    default:
      return state;
  }
};

export default settings;
