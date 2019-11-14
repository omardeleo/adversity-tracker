import React, { useState, useEffect } from "react";
import { SliderModule } from "../../../modules/SliderModule";
import * as scales from "../../../ui/slider_scales";
import CylinderGaugeModule from "../../../dataVisualModules/CylinderGaugeModule";

export const Energy = props => {
  const { updateForm } = props;

  // Define default state
  const defaultState = {
    "control_energy_level": 0,
    "physical_energy_level": 0
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

  useEffect(() => {
    updateForm(state);
  }, [updateForm, state]);

  return (
    <div className="form-wrapper">
      <div className="data-visual-module-row">
        <SliderModule
          prompt={"My perceived energy level for self-discipline..."}
          info={null}
          scale={scales.energy}
          value={state.control_energy_level}
          handleInput={handleInput("control_energy_level")}
        />

        <CylinderGaugeModule
          id="chart1"
          cName="cylinder-gauge1"
          name="Self-Discipline"
          value={state.control_energy_level}
        />
      </div>

      <div className="data-visual-module-row">
        <SliderModule
          prompt={"My perceived physical energy level..."}
          info={null}
          scale={scales.energy}
          value={state.physical_energy_level}
          handleInput={handleInput("physical_energy_level")}
        />

        <CylinderGaugeModule
          id="chart2"
          cName="cylinder-gauge2"
          name="Physical Energy"
          value={state.physical_energy_level}
        />
      </div>
    </div>
  );
};
