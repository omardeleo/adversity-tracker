import $ from 'jquery';

export const createFeeling = feeling => (
    $.ajax({
        method: 'POST',
        url: '/api/feelings',
        data: { feeling }
    })
);