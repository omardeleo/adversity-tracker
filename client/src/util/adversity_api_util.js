import $ from 'jquery';

export const createAdversity = (adversity) => (
    $.ajax({
        method: 'POST',
        url: `/api/v1/users/${adversity.user_id}/adversities`,
        data: { adversity }
    })
);

export const fetchAdversities = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/v1/users/${id}/adversities`,
    });
};