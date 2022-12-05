import { RECEIVE_SESSION } from '../actions';

const initSettings = { session: {} };

const settings = (state = initSettings, action) => {
  switch (action.type) {
    case RECEIVE_SESSION:
      return { ...state, session: action.session };
    default:
      return state;
  }
};

export default settings;
