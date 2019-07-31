import {
    RECEIVE_ADVERSITIES,
} from '../actions/adversity_actions';

const adversitiesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ADVERSITIES:
            return action.adversities;
        default:
            return state;
    }
};

export default adversitiesReducer;