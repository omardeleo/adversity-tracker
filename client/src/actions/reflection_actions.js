import * as APIUtil from '../util/reflection_api_util';

export const RECEIVE_REFLECTIONS = 'RECEIVE_REFLECTIONS';
export const RECEIVE_REFLECTION = 'RECEIVE_REFLECTION';

export const receiveReflections = reflections => ({
  type: RECEIVE_REFLECTIONS,
  reflections,
});

export const receiveReflection = reflection => ({
  type: RECEIVE_REFLECTION,
  reflection,
});

export const fetchReflection = () => dispatch => {
  APIUtil.fetchReflections().then(reflections => {
    dispatch(receiveReflections(reflections));
  });
};

export const createReflection = reflection => dispatch => (
  APIUtil.createReflection(reflection)
    .then(reflection => (dispatch(receiveReflection(reflection))))
);