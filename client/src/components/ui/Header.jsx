import React, { useState, useEffect } from "react";

export const Header = props => {

  const { active, 
          adversities, 
          setAdversity, 
          fetchAdversities, 
          currentUser, 
          forms, 
          submitForm, 
          updateForm 
        } = props;

  const defaultState = { adversity_id: active };
  const [state, setState] = useState(defaultState);

  const defaultAdversity = active ? active : 'Select Adversity';
  const adversitiesList = adversities.map(adv => <option key={adv.id} value={adv.id}>{adv.title}</option>);

  const handleInput = key => e => {
    let value = e.target ? e.target.value : e.value;
    setState({
      ...state,
      [key]: value
    });
    setAdversity(value);
  };

  const handleAccept = () => {
    submitForm(forms);
  };

  const handleClear = () => {
    console.log('clear');
  }

  useEffect(() => {
    fetchAdversities(currentUser.id)
  },[fetchAdversities, currentUser.id]);

  useEffect(() => {
    updateForm(state);
  }, [updateForm, state]);

  return (
      <div className="header-wrapper">
        <div className="header">
          <div className="header-label">Adversity Experience Title...</div>
          <div className="input-wrapper">
            <select onChange={handleInput('adversity_id')}>
              <option value={active}>{defaultAdversity}</option>
              {adversitiesList}
            </select>
          </div>
        </div>
        <div className="action-button-wrapper">
          <div className="action-button" onClick={handleAccept}>accept</div>
          <div className="action-button" onClick={handleClear}>clear</div>
        </div>
      </div>
  );

};
