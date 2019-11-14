import React, { useState, useEffect } from "react";
import { SliderModule } from "../../../modules/SliderModule";
import { TextModule } from "../../../modules/TextModule";
import * as scales from "../../../ui/slider_scales";

export const Pressure = props => {
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
      <TextModule
        prompt={"What kind of pressure am I under?"}
        info={null}
        value={state.belief_text}
        handleInput={handleInput("belief_text")}
        placeholder={"Discuss the pressure"}
      />

      <div className="data-module-row">
        <SliderModule
          prompt={"My perceived sense of pressure..."}
          info={null}
          scale={scales.pressure}
          value={state.pressure_level}
          handleInput={handleInput("pressure_level")}
        />

        <SliderModule
          prompt={"My perceived sense of pressure..."}
          info={null}
          scale={scales.pressure}
          value={state.pressure_level}
          handleInput={handleInput("pressure_level")}
        />
      </div>
    </div>
  );
};
