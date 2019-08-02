import $ from 'jquery';

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/v1/session',
        data: { user }
    })
);

export const signup = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/v1/users',
        data: { user }
    });
};

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/v1/session'
    })
};