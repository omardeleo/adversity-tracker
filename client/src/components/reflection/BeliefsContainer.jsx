import { connect } from 'react-redux';
import { Beliefs } from './Beliefs';
import { updateForm } from '../../actions/form_actions';
import { createBelief } from '../../actions/belief_actions';

const mapStateToProps = ({ui, forms}) => ({
  belief: forms.beliefsForm,
  adversityId: ui.adversity_id,
  adversityTitle: ui.recognition_form.title,
  addingRecognition: ui.adding_recognition
});

const mapDispatchToProps = dispatch => ({
  updateForm: beliefsForm => dispatch(updateForm(beliefsForm)),
  createBelief: beliefs => dispatch(createBelief(beliefs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beliefs);