import { connect } from 'react-redux';
import { Energy } from './Energy';
import { updateForm } from '../../../actions/form_actions';
import { createBelief } from '../../../actions/belief_actions';
import { fetchAdversities } from '../../../actions/adversity_actions';

// const mapStateToProps = ({ui, forms, entities, session}) => ({
//   currentUser: entities.users[session.id],
//   energy: forms.energyForm,
//   adversityId: ui.adversity_id,
//   adversityTitle: ui.recognition_form.title,
//   adversities: Object.values(entities.adversities),
//   addingRecognition: ui.adding_recognition
// });

// const mapDispatchToProps = dispatch => ({
//   fetchAdversities: id => dispatch(fetchAdversities(id)), 
//   updateForm: energyForm => dispatch(updateForm(energyForm)),
//   createEnergy: energy => dispatch(createBelief(energy))
// });

export default connect(
  //mapStateToProps,
 // mapDispatchToProps
)(Energy);