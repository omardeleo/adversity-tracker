import * as APIUtil from '../util/belief_api_util';

export const RECEIVE_BELIEFS = 'RECEIVE_BELIEFS';
export const RECEIVE_BELIEF = 'RECEIVE_BELIEF';

export const receiveBeliefs = beliefs => ({
  type: RECEIVE_BELIEFS,
  beliefs,
});

export const receiveBelief = belief => ({
  type: RECEIVE_BELIEF,
  belief,
});

export const fetchBeliefs = () => dispatch => {
  APIUtil.fetchBeliefs().then(beliefs => {
    dispatch(receiveBeliefs(beliefs));
  });
};

export const createBelief = belief => dispatch => (
  APIUtil.createBelief(belief)
    .then(belief => (dispatch(receiveBelief(belief))))
);