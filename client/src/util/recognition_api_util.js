import $ from 'jquery';

export const createRecognition = (adversity_id) => (
    $.ajax({
        method: 'POST',
        url: `/api/v1/recognitions`,
        data: {recognition: { adversity_id }}
    })
);