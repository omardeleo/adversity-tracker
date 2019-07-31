import * as APIUtil from '../util/adversity_api_util';

export const RECEIVE_ADVERSITIES = 'RECEIVE_ADVERSITIES';

export const receiveAdversities = adversities => ({
    type: RECEIVE_ADVERSITIES,
    adversities,
});

export const fetchAdversities = id => dispatch => (
    APIUtil.fetchAdversities(id).then(adversities => (
        dispatch(receiveAdversities(adversities))
    ))
);