import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});


export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(user => {
        const loginData = {
            id: user.id
        }
        window.localStorage.setItem('userData', JSON.stringify(loginData));
        dispatch(receiveCurrentUser(user))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ));
};

export const login = user => dispatch => {
    return APIUtil.login(user).then(user => {
        const loginData = {
            id: user.id
        }
        window.localStorage.setItem('userData', JSON.stringify(loginData));
        dispatch(receiveCurrentUser(user))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const logout = () => dispatch => (
    APIUtil.logout().then(() => {
        window.localStorage.clear();
        dispatch(logoutCurrentUser());
    })
);