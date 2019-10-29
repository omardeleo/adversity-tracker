import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Tab from "./Tab";
import '../../AdversityDataInput.css';

export const ReflectionNav = props => {
  const { setDataTab } = props;
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setDataTab(tab);
  }, [tab]);


  return(
    <div className="navigation">
      <Tab
        section="Beliefs"
        handleTabClick={setTab}
        selected={true}
      />
      <Tab section="Motivation" handleTabClick={setTab} />
      <Tab section="Retrospection" handleTabClick={setTab} />
    </div>

  )
};