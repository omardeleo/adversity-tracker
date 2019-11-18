import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSubTab } from '../../../actions/ui_actions';
import Tab from './Tab';

const SubTabNav = props => {
  const { setSubTab } = props;
  const [active, setActive] = useState("Recognition");

  const handleClick = e => {
    const clicked = e.target.value;
    setSubTab(clicked);
    if (active !== clicked) {
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
      <Tab section="Recognition" default={true} handleClick={handleClick} />
      <Tab section="Reflection" handleClick={handleClick} />
      <Tab section="Retrospection" handleClick={handleClick} />
    </div>
  )
};

const mapStateToProps = ({ ui }) => ({
  active: ui.sub
});

const mapDispatchToProps = dispatch => ({
  setSubTab: tab => dispatch(setSubTab(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubTabNav);