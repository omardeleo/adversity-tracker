import React, { useState, useEffect } from "react";
import { InputModule } from "../../../modules/InputModule";
import { TextModule } from "../../../modules/TextModule";
import { valuesList } from "../../../inventory/values";
import { OptionsModule } from "../../../modules/OptionsModule";

export const Values = props => {

  const { updateForm } = props;

  // Define default state
  const defaultState = {};

  // Hook for [state variable, state action]
  const [state, setState] = useState(defaultState);

  // handleInput accepts a key as a string and sets input value in state
  const handleInput = key => e => {
    let value = e.target ? e.target.value : e.value;
    setState({
      ...state,
      [key]: value
    });
  };

  useEffect(() => {
    updateForm(state);
  }, [updateForm, state]);

  return (
    <div className="form-wrapper">
      
      <OptionsModule
        prompt={"I Value..."}
        info={null}
        value={state.value}
        handleInput={handleInput("value")}
        placeholder={"Select a Value"}
        options={valuesList}
      />

      <div className="data-module-row">
        <InputModule
          prompt={"Phrase that explains this value..."}
          info={null}
          value={state.value_phrase}
          handleInput={handleInput("value_phrase")}
          placeholder={"...move fast and break things..."}
        />
        <InputModule
          prompt={"My action that shows this value..."}
          info={null}
          value={state.value_action}
          handleInput={handleInput("value_action")}
          placeholder={"...write a personal demonstration..."}
        />
      </div>

      <TextModule
        prompt={"I learned this value from..."}
        info={null}
        value={state.value_origin}
        handleInput={handleInput("value_origin")}
        placeholder={"...write a story or experience..."}
      />

    </div>
  );
};
