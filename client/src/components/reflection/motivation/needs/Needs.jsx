import React, { useState, useEffect } from "react";
import { SliderModule } from "../../../modules/SliderModule";
import { SelectModule } from "../../../modules/SelectModule";
import { TextModule } from "../../../modules/TextModule";
import { PromptModule } from "../../../modules/PromptModule";
import * as scales from "../../../ui/slider_scales";
import { needsList } from "../../../inventory/needs";
import NeedsGaugeModule from "../../../dataVisualModules/NeedsGaugeModule";

export const Needs = props => {
  const { updateForm } = props;

  // Define default state
  const defaultState = {
      "need": "Select a new need"
  };

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
        prompt={
          "What needs of mine are being met? What needs are not being met?"
        }
        info={null}
        value={state.belief_text}
        handleInput={handleInput("belief_text")}
        placeholder={"Discuss my needs"}
      />
      <div className="data-module-row"></div>

      <div className="data-module-row">
        <div className="data-module">
          <PromptModule prompt={"I perceive my need..."} info={null} />

          <SelectModule
            prompt={null}
            info={null}
            handleInput={handleInput("need")}
            placeholder={"Select a Need"}
            options={needsList}
          />

          <div className="text">is...</div>

          <SliderModule
            prompt={null}
            info={null}
            scale={scales.need}
            value={state.need_level}
            handleInput={handleInput("need_level")}
          />

          <div className="text">
            because...
            <input
              value={state.need_reason}
              onChange={handleInput("need_reason")}
            ></input>
          </div>

        </div>

        <NeedsGaugeModule
            id="chart3"
            newNeed= {state.need}
            cName="needs-gauge1"
            name="My Needs"
            value={state.need_level}
        />
      </div>
    </div>
  );
};
