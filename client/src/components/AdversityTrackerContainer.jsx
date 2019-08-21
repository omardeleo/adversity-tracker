import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateTitle, updateStory, updateFeelingText, updateFeelingValue } from '../actions/ui_actions';
import AdversityTracker from './AdversityTracker';


const mapStateToProps = ({ session, entities: { users, ui: {recognition_form} } }) => {
    console.log('form', recognition_form);
    return {
        currentUser: users[session.id],
        title: recognition_form.title,
        story: recognition_form.story,
        feelings: recognition_form.feelings
    }
};

const mapDispatchToProps = dispatch => ({
    updateTitle: title => dispatch(updateTitle(title)),
    updateStory: story => dispatch(updateStory(story)),
    updateFeelingText: feeling => dispatch(updateFeelingText(feeling)),
    updateFeelingValue: feeling => dispatch(updateFeelingValue(feeling))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdversityTracker));