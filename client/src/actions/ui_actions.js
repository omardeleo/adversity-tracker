export const CLICK_MAIN_NAV = 'CLICK_MAIN_NAV';
export const CLICK_SUB_NAV = 'CLICK_SUB_NAV';
export const CLICK_JOURNAL_NAV = 'CLICK_JOURNAL_NAV';
export const CLICK_TITLE = 'CLICK_TITLE';
export const CLEAR_TITLE = 'CLEAR_TITLE';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_STORY = 'UPDATE_STORY';
export const UPDATE_FEELING_TEXT = 'UPDATE_FEELING_TEXT';
export const UPDATE_FEELING_VALUE = 'UPDATE_FEELING_VALUE';
export const ADD_SLIDER = 'ADD_SLIDER';
export const CLEAR_FORM = 'CLEAR_FORM';

// Navigation Actions

export const setMainTab = tab => ({
    type: CLICK_MAIN_NAV,
    tab
});

export const setSubTab = tab => ({
    type: CLICK_SUB_NAV,
    tab
});

export const setJournalTab = tab => ({
    type: CLICK_JOURNAL_NAV,
    tab
});

// Data Input Actions

export const setCurrentTitle = (payload) => ({
    type: CLICK_TITLE,
    payload
});

export const clearTitle = () => ({
    type: CLEAR_TITLE
});

export const clearForm = () => ({
    type: CLEAR_FORM
});

export const updateTitle = title => ({
    type: UPDATE_TITLE,
    title
}); 

export const updateStory = story => ({
    type: UPDATE_STORY,
    story
}); 

export const updateFeelingText = (feeling) => ({
    type: UPDATE_FEELING_TEXT,
    feeling
});

export const updateFeelingValue = (feeling) => ({
    type: UPDATE_FEELING_VALUE,
    feeling
}); 

export const setTitle = (title, id) => dispatch => {
    dispatch(setCurrentTitle({title, id}))
    dispatch(setMainTab('AdversityDataInput'))
};

export const addSlider = () => {
   return{ type: ADD_SLIDER};
};
