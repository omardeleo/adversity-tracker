import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
    updateTitle, 
    updateStory, 
    updateFeelingText, 
    updateFeelingValue, 
    addSlider,
    clearForm
} from '../actions/ui_actions';
import { createAdversity } from '../actions/adversity_actions';
import AdversityTracker from './AdversityTracker';


const mapStateToProps = ({ session, entities: { users }, ui: { adversity_id, adding_recognition, recognition_form, subtab } }) => {
    return {
        currentUser: users[session.id],
        title: recognition_form.title,
        story: recognition_form.story,
        feelings: recognition_form.feelings,
        adding: adding_recognition,
        adversity_id: adversity_id,
        subtab: subtab
    };
};

const mapDispatchToProps = dispatch => ({
    updateTitle: title => dispatch(updateTitle(title)),
    updateStory: story => dispatch(updateStory(story)),
    updateFeelingText: feeling => dispatch(updateFeelingText(feeling)),
    updateFeelingValue: feeling => dispatch(updateFeelingValue(feeling)),
    addSlider: () => dispatch(addSlider()),
    createAdversity: (adversity) => dispatch(createAdversity(adversity)),
    clearForm: () => dispatch(clearForm())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdversityTracker));