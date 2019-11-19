import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import Warning from './warning';

import '../../stylesheets/modal.css';

const Modal = ({ modal, closeModal, active }) => {

  if (!modal) {
    return null;
  }

  let content;
  let modalBehavior;
  const defaultBehavior = closeModal;

  switch (modal) {
    case 'WARN': {
      content = <Warning active={active} />;
      modalBehavior = defaultBehavior;
      break;
    }
    default: return null;
  }


  return (
    <div className="modal-background" onClick={modalBehavior}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {content}
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