import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setJournalTab } from '../../../actions/ui_actions';
import Tab from "./Tab";
import '../../AdversityDataInput.css';

const JournalNav = props => {
  const { setJournalTab } = props;

  const handleClick = e => {
    setJournalTab(e.target.value);
  };
  
  useEffect(() => {
    setJournalTab("Motivation");
  }, [setJournalTab]);
  
  return(
    <div className="navigation">
      <Tab section="Motivation" handleClick={handleClick}/>
      <Tab section="Energy" handleClick={handleClick} />
      <Tab section="Recovery" handleClick={handleClick} />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setJournalTab: tab => dispatch(setJournalTab(tab))
});

export default connect(null, mapDispatchToProps)(JournalNav);