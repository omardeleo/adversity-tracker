export const UPDATE_FORM = 'UPDATE_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

export const updateForm = data => ({
  type: UPDATE_FORM,
  data
});

export const clearForm = () => ({
  type: CLEAR_FORM
});