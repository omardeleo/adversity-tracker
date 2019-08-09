import $ from 'jquery';

export const createStory = (recognition) => (
    $.ajax({
        method: 'POST',
        url: `/api/v1/stories`,
        data: { story: { 
            recognition_id: recognition.id,
            text: recognition.text 
        } }
    })
);