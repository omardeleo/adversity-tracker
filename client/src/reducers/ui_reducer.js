import {
    CLICK_MAIN_NAV,
    CLICK_SUB_NAV,
    CLICK_TITLE,
    CLEAR_TITLE,
    UPDATE_TITLE,
    UPDATE_STORY,
    UPDATE_FEELING_TEXT,
    UPDATE_FEELING_VALUE,
    ADD_SLIDER,
    CLEAR_FORM
} from '../actions/ui_actions';

const initialState = {
    tab: "Adversity Data Input",
    subtab: "Recognition",
    recognition_title: "",
    adding_recognition: false,
    adversity_id: null,
    recognition_form: {
        title: "",
        story: "",
        feelings: [{ feeling: "", sliderVal: 0 }]
    }
}

const uiReducer = (state = initialState, action) => {
    Object.freeze(state);
    const oldFormData = state.recognition_form;
    const oldFeelings = oldFormData.feelings;
    let newFormData;
    let newFeelings = [...oldFeelings];
    switch (action.type) {
        case CLICK_MAIN_NAV:
            return Object.assign({}, state, { tab: action.tab });
        case CLICK_SUB_NAV:
            return Object.assign({}, state, { subtab: action.tab });
        case CLICK_TITLE:
            newFormData = Object.assign({}, oldFormData, { title: action.payload.title })
            return Object.assign({}, state, { recognition_form: newFormData,
                                                adding_recognition: true,
                                            adversity_id: action.payload.id });
        case CLEAR_TITLE:
            return Object.assign({}, state, { recognition_title: "",
                adding_recognition: false,
            adversity_id: null });
        case UPDATE_TITLE:
            newFormData = Object.assign({}, oldFormData, { title: action.title })
            return Object.assign({}, state, { recognition_form: newFormData })
        case UPDATE_STORY:
            newFormData = Object.assign({}, oldFormData, {story: action.story.value})
            return Object.assign({}, state, { recognition_form: newFormData })
        case UPDATE_FEELING_TEXT:
            newFeelings[action.feeling.index].feeling = action.feeling.feeling;
            newFormData = Object.assign({}, oldFormData, { feelings: newFeelings })
            return Object.assign({}, state, { recognition_form: newFormData })
        case UPDATE_FEELING_VALUE:
            newFeelings[action.feeling.index].sliderVal = action.feeling.value;
            newFormData = Object.assign({}, oldFormData, { feelings: newFeelings })
            return Object.assign({}, state, { recognition_form: newFormData })
        case ADD_SLIDER: 
            newFeelings.push({ feeling: "", sliderVal: 0 });
            newFormData = Object.assign({}, oldFormData, { feelings: newFeelings })
            return Object.assign({}, state, { recognition_form: newFormData })
        case CLEAR_FORM:
            newFormData = {
                title: "",
                story: "",
                feelings: [{ feeling: "", sliderVal: 0 }]
            };
            return Object.assign({}, state, { adversity_id: null, adding_recognition: false, recognition_form: newFormData })
        default:
            return state;
    }
};

export default uiReducer;