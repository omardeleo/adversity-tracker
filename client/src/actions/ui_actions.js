export const CLICK_MAIN_NAV = 'CLICK_MAIN_NAV';
export const CLICK_TITLE = 'CLICK_TITLE';
export const CLEAR_TITLE = 'CLEAR_TITLE';

export const setCurrentTab = tab => ({
    type: CLICK_MAIN_NAV,
    tab
});

export const setCurrentTitle = (payload) => ({
    type: CLICK_TITLE,
    payload
});

export const clearTitle = () => ({
    type: CLEAR_TITLE
});

export const setTitle = (title, id) => dispatch => {
    dispatch(setCurrentTitle({title, id}))
    dispatch(setCurrentTab('AdversityDataInput'))
};

// export const clickTitle = title => dispatch => {
//     dispatch(setCurrentTitle(title));
// };

// export const submitRecognition = () => dispatch => {
//     dispatch(clearTitle());
// };

