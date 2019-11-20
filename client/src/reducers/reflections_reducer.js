import {
  RECEIVE_REFLECTION,
  RECEIVE_REFLECTIONS
} from '../actions/reflection_actions';

const reflectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REFLECTIONS:
      return Object.assign({}, state, action.reflections);
    case RECEIVE_REFLECTION:
      return Object.assign({}, state, { [action.reflection.id]: action.reflection });
    default:
      return state;
  }
};

export default reflectionsReducer;