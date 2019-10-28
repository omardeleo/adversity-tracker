import * as APIUtil from '../util/adversity_api_util';

export const RECEIVE_ADVERSITIES = 'RECEIVE_ADVERSITIES';
export const RECEIVE_ADVERSITY = 'RECEIVE_ADVERSITY';

export const receiveAdversities = adversities => ({
    type: RECEIVE_ADVERSITIES,
    adversities,
});

export const receiveAdversity = adversity => ({
    type: RECEIVE_ADVERSITY,
    adversity,
});

export const fetchAdversities = id => dispatch => (
    APIUtil.fetchAdversities(id).then(adversities => {
        dispatch(receiveAdversities(adversities));
    })
);

export const createAdversity = (adversity) => dispatch => {
    
    return (APIUtil.createAdversity(adversity)
    .then(adversity => { 
        
       return dispatch(receiveAdversity(adversity));
        }
    ));
    };