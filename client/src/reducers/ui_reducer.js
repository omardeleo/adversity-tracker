import {
    CLICK_MAIN_NAV,
    CLICK_TITLE,
    CLEAR_TITLE
} from '../actions/ui_actions';

const initialState = {
    tab: "Adversity Data Input",
    recognition_title: "",
    adding_recognition: false,
    adversity_id: null
}

const uiReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CLICK_MAIN_NAV:
            return Object.assign({}, state, { tab: action.tab });
        case CLICK_TITLE:
            return Object.assign({}, state, { recognition_title: action.payload.title,
                                                adding_recognition: true,
                                            adversity_id: action.payload.id });
        case CLEAR_TITLE:
            return Object.assign({}, state, { recognition_title: "",
                adding_recognition: false,
            adversity_id: null });
        default:
            return state;
    }
};

export default uiReducer;