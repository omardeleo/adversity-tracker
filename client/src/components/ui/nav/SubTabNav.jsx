import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSubTab } from '../../../actions/ui_actions';
import { openModal } from '../../../actions/modal_actions';
import Modal from '../../ui/modal/modal';
import Tab from './Tab';


const SubTabNav = props => {
  const { setSubTab, openModal, form } = props;
  const [active, setActive] = useState("Recognition");

  const handleClick = e => {
    const clicked = e.target.value;
    if (active !== clicked) {
      if (form.length > 1) {
        return openModal('WARN');
      }
      makeActive(clicked);
    }
  };

  const makeActive = clicked => {
    const prevTab = document.getElementById(active);
    const nextTab = document.getElementById(clicked);
    prevTab.classList.remove("selected");
    nextTab.classList.add("selected");
    setActive(clicked);
  };

  useEffect(() => {
    setSubTab(active);
  }, [setSubTab, active]);


  return (
    <div className="journal-nav">
      <Modal active={active} />
      <Tab section="Recognition" default={true} handleClick={handleClick} />
      <Tab section="Reflection" handleClick={handleClick} />
      <Tab section="Retrospection" handleClick={handleClick} />
    </div>
  )
};

const mapStateToProps = ({ ui, form }) => ({
  active: ui.sub,
  form: Object.keys(form)
});

const mapDispatchToProps = dispatch => ({
  setSubTab: tab => dispatch(setSubTab(tab)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubTabNav);