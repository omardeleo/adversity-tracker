import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Tab from "./Tab";
import '../../AdversityDataInput.css';

export const ReflectionNav = props => {
  const { setDataTab } = props;
  const [tab, setTab] = useState("Motivation");

  useEffect(() => {
    setDataTab(tab);
  }, [tab]);

  return(
    <div className="navigation">
      <Tab section="Motivation" handleClick={setTab}/>
      <Tab section="Energy" handleClick={setTab} />
      <Tab section="Recovery" handleClick={setTab} />
    </div>
  )
};

