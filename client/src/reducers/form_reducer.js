import { UPDATE_FORM } from '../actions/form_actions';

const formReducer = (state = {}, action) => {
  

  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FORM:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

export default formReducer;