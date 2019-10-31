import React, { useState } from "react";
import HeaderModule from "../../modules/HeaderModule";
import JournalNav from "../../ui/nav/JournalNav";
// import { SliderModule } from "../../modules/SliderModule";
// import { SelectModule } from "../../modules/SelectModule";
import { TextModule } from "../../modules/TextModule";
// import { PromptModule } from "../../modules/PromptModule";
// import * as scales from "../../ui/slider_scales";
// import { needsList } from "../../inventory/needs";

export const Beliefs = props => {

  // Define default state
  const defaultState = {
    adversity_id

  };

  // Hook for [state variable, state action]
  const [state, setState] = useState(defaultState);

  // handleInput Utility accepts a key as a string and sets input value in state
  const handleInput = key => e => {
    let value = e.target ? e.target.value : e.value;
    setState({
      ...state,
      [key]: value
    });
  };

  // handle accept can be configured as necessary
  const handleAccept = () => {
    // const { createBelief } = props;
    // createBelief(state).then(() => props.fetchAdversities(props.currentUser.id));
    console.log("THIS WORKS");
  };

  // handle clear restores default state
  const handleClear = () => {
    setState(defaultState);
  };

  const actions = { accept: handleAccept, clear: handleClear };

  return (
    <div className="form-wrapper">

      <HeaderModule
        state={state}
        defaultState={defaultState}
        actions={actions}
        handleInput={handleInput("adversity_id")}
      />

      <div className="sub-tab-wrapper">

        <JournalNav />

        <TextModule
          prompt={"Content Coming Soon"}
          info={null}
          value={state.testing}
          handleInput={handleInput("testing")}
          placeholder={"Content Coming Soon"}
        />

      </div>

    </div>
  );
};
