import $ from 'jquery';

export const createFeeling = feeling => (
    $.ajax({
        method: 'POST',
        url: '/api/v1/feelings',
        data: { feeling }
    })
);