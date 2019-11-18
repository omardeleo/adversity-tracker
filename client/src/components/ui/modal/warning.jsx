import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';


const Warning = props => {

  const {form, closeModal} = props;

  const handleReturn = () => {
    closeModal();
  };

  const handleClear = () => {

  };


    return (
      <div className="modal">
        <div id="form-type">Are you sure you want to navigate away from this {form}?</div>
        <div className="modal-form">
            <button id="contact-portfolio" onClick={handleReturn}>Return to Form</button>
            <button id="contact-li" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    )

};



const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mdp)(Warning);