import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            const errors = action.errors;
            const newState = {
                first_name: null,
                last_name: null,
                email: null,
                password: null
            }
            if (errors.includes("First name can't be blank")) {
                newState.firstName = "First name can't be blank"
            } 
            if (errors.includes("Last name can't be blank")) {
                newState.lastName = "Last name can't be blank"
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
            if (errors.includes("Email can't be blank")) {
                newState.email = "Email can't be blank"
            }
            if (errors.includes("Password can't be blank")) {
                newState.password = "Password can't be blank"
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