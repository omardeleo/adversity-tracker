import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setJournalTab } from '../../../actions/ui_actions';
import Tab from "./Tab";

const JournalNav = props => {
  const { setJournalTab } = props;
  const [active, setActive] = useState("Motivation");

  const handleClick = e => {
    const clicked = e.target.value;
    setJournalTab(clicked);
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
    setJournalTab(active);
  }, [setJournalTab, active]);

  
  return(
    <div className="journal-nav">
      <Tab section="Motivation" default={true} handleClick={handleClick}/>
      <Tab section="Energy" handleClick={handleClick} />
      <Tab section="Recovery" handleClick={handleClick} />
    </div>
  )
};

const mapStateToProps = ({ ui }) => ({
  active: ui.journal_tab
});

const mapDispatchToProps = dispatch => ({
  setJournalTab: tab => dispatch(setJournalTab(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(JournalNav);