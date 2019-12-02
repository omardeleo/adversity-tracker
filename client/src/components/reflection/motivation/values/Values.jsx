import React, { useState, useEffect } from "react";
import { SelectModule } from "../../../modules/SelectModule";
import { InputModule } from "../../../modules/InputModule";
import { TextModule } from "../../../modules/TextModule";
import { valuesList } from "../../../inventory/values";

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
      

      <SelectModule
        prompt={"I Value..."}
        info={null}
        handleInput={handleInput("value")}
        placeholder={"Select a Value"}
        options={valuesList}
      />

      <div className="data-module-row">
        <InputModule
          prompt={"Phrase or credo that explains this value..."}
          info={null}
          value={state.value_origin}
          handleInput={handleInput("value_origin")}
          placeholder={"...write a story or experience..."}
        />
        <InputModule
          prompt={"My action that shows this value..."}
          info={null}
          value={state.value_origin}
          handleInput={handleInput("value_origin")}
          placeholder={"...write a story or experience..."}
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
