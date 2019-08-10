import $ from 'jquery';

export const createRecognition = (adversity_id, story) => (
    $.ajax({
        method: 'POST',
        url: `/api/v1/recognitions`,
        data: {recognition: { adversity_id, story }}
    })
);