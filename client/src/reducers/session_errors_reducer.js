import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            const errors = action.errors;
            const newState = {
                name: null,
                email: null,
                password: null
            }
            if (errors.includes("Name can't be blank")) {
                newState.name = "Name can't be blank"
            } 
            if (errors.includes("Email Invalid email")) {
                newState.email = "Invalid email"
            } 
            if (errors.includes("Email can't be blank")) {
                newState.email = "Email can't be blank"
            } 
            if (errors.includes("Password is too short (minimum is 6 characters)")) {
                newState.password = "Password is too short (minimum is 6 characters)"
            }
            if (errors.includes("Invalid email/password combination")) {
                newState.signIn = "Invalid email/password combination"
            }
            return newState;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
};