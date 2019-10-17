import {
  RECEIVE_BELIEF,
  RECEIVE_BELIEFS
} from '../actions/belief_actions';

const beliefsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BELIEFS:
      return Object.assign({}, state, action.beliefs);
    case RECEIVE_BELIEF:
      return Object.assign({}, state, { [action.belief.id]: action.belief });
    default:
      return state;
  }
};

export default beliefsReducer;