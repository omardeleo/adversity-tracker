import { UPDATE_FORM } from '../actions/form_actions';

const formsReducer = (state = {}, action) => {
  

  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FORM:
      return Object.assign({}, state, { [action.form.form]: action.form });
    default:
      return state;
  }
};

export default formsReducer;