import $ from 'jquery';

export const getUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`,
    })
);