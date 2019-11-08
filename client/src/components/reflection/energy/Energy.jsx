import React, { useState } from "react";
import HeaderModule from "../../modules/HeaderModule";
import { SliderModule } from "../../modules/SliderModule";
import { TextModule } from "../../modules/TextModule";
//import { PromptModule } from "../../modules/PromptModule";
import * as scales from "../../ui/slider_scales";
import CylinderGaugeModule from "../../dataVisualModules/cylinderGaugeModule";
//import CylinderGaugeModule2 from "../../dataVisualModules/cylinderGaugeModule2";

// export default function Energy (props) {
//     const [energy1, setEnergy1] = useState ("0");
//     const [energy2, setEnergy2] = useState ("0");
//     const [energy3, setEnergy3] = useState ("0");
//     const [energy4, setEnergy4] = useState ("0");
//     const [energy5, setEnergy5] = useState ("0");
//     const [energy6, setEnergy6] = useState ("0");

// }

// function handleEnergy1SliderChange(e) {
//     setEnergy1(e.target.value);
// }

export const Energy = props => {
  // Define default state
  const defaultState = {
    adversity_id: props.adversityId,
    adversity: props.adversityTitle,
    control_level: 0,
    ability_level: 0,
    need_level: 0,
    pressure_level: 0,
    energy_text: "",
    need: "Need",
    need_reason: ""
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
    const { createEnergy } = props;
    createEnergy(state).then(() =>
      props.fetchAdversities(props.currentUser.id)
    );
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
        <div className="sub-tab-label">Energy</div>

        <div className="data-module-row">
          <SliderModule
            prompt={"My perceived energy level for self-control..."}
            info={null}
            scale={scales.energy}
            value={state.ability_level}
            handleInput={handleInput("ability_level")}
          />

          <CylinderGaugeModule
            id = "chart1"
            cName="cylinder-gauge1"
            name="Self Control"
            value={state.ability_level}
          />
        </div>

        <div className="data-module-row">
          <SliderModule
            prompt={"My perceived physical energy level..."}
            info={null}
            scale={scales.energy}
            value={state.control_level}
            handleInput={handleInput("control_level")}
          />

          <CylinderGaugeModule
            id = "chart2"
            cName="cylinder-gauge2"
            name="Physical Energy"
            value={state.control_level}
          />
        </div>
      </div>
    </div>
  );
};
