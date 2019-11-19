import { UPDATE_FORM, CLEAR_FORM } from '../actions/form_actions';

const formReducer = (state = {}, action) => {
  

  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FORM:
      return Object.assign({}, state, action.data);
    case CLEAR_FORM:
      return {};
    default:
      return state;
  }
};

export default formReducer;