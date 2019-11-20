import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { clearForm } from '../../../actions/form_actions';
import '../../stylesheets/modal.css';

const Warning = props => {

  const {active, closeModal, clearForm} = props;

  const handleReturn = () => {
    closeModal();
  };

  const handleDiscard = () => {
    clearForm();
    closeModal();
  };


    return (
      <div className="modal">
        <div id="form-type">You have an unsubmitted {active}?</div>
        <div className="modal-form">
            <button id="contact-portfolio" onClick={handleReturn}>Return to {active}</button>
            <button id="contact-li" onClick={handleDiscard}>Discard Changes</button>
        </div>
      </div>
    )

};



const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  clearForm: () => dispatch(clearForm())
});

export default connect(null, mdp)(Warning);