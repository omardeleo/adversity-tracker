import $ from 'jquery';

export const createAdversity = (adversity) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${adversity.user_id}/adversities`,
        data: { adversity }
    })
);

export const fetchAdversities = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}/adversities`,
    });
};