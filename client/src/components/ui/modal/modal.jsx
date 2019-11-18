import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import Warning from './warning';

const Modal = ({ modal, closeModal }) => {

  if (!modal) {
    return null;
  }

  let form;
  let modalBehavior;
  const defaultBehavior = closeModal;

  switch (modal) {
    case 'WARN': {
      form = <Warning />;
      modalBehavior = defaultBehavior;
      break;
    }
    default: return null;
  }


  return (
    <div className="modal-background" onClick={modalBehavior}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {form}
      </div>
    </div>
  )

}

const msp = ({ modal }) => ({
  modal: modal
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal)