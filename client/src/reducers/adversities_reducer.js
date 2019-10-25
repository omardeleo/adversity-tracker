import {
    RECEIVE_ADVERSITIES,
    RECEIVE_ADVERSITY
} from '../actions/adversity_actions';

const adversitiesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ADVERSITIES:
            return action.adversities;
        case RECEIVE_ADVERSITY:
            debugger
            return [...Array.from(state), action.adversity];
        default:
            return state;
    }
};

export default adversitiesReducer;