import $ from 'jquery';

export const getUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/v1/users/${id}`,
    })
);