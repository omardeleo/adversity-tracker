import React, { useState } from "react";
import HeaderModule from "../../modules/HeaderModule";
import { SliderModule } from "../../modules/SliderModule";
import { SelectModule } from "../../modules/SelectModule";
import { TextModule } from "../../modules/TextModule";
import { PromptModule } from "../../modules/PromptModule";
import * as scales from "../../ui/slider_scales";
import { needsList } from "../../inventory/needs";

export const Beliefs = props => {

  // Define default state
  const defaultState = {
    adversity_id: props.adversityId,
    adversity: props.adversityTitle,
    control_level: 0,
    ability_level: 0,
    need_level: 0,
    pressure_level: 0,
    belief_text: "",
    need: "Need",
    need_reason: "",
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
    const { createBelief } = props;
    createBelief(state).then(props.fetchAdversities(props.currentUser.id));
  };

  // handle clear restores default state
  const handleClear = () => {
    setState(defaultState);
  };

  const actions = {accept: handleAccept, clear: handleClear};

  return (
    <div className="form-wrapper">

      <HeaderModule 
        state={state}
        defaultState={defaultState} 
        actions={actions} 
        handleInput={handleInput("adversity_id")}
      />

      <div className="sub-tab-wrapper">

        <div className="sub-tab-label">Beliefs</div>

          <TextModule 
            prompt={"Why does this feel like an adversity?"}
            info={null}
            value={state.belief_text}
            handleInput={handleInput("belief_text")}
            placeholder={"Discuss an adversity"}
          />
       

        <div className="data-module-row">

          <SliderModule 
            prompt={"My perceived sense of control (locus of control) in reflecting on this adversity is that..."}
            info={null}
            scale={scales.control}
            value={state.control_level}
            handleInput={handleInput("control_level")}
            leftDetail={["The outcome is out of my control","Things happen to me"]}
            rightDetail={["The outcome is within my control", "I make things happen"]}
          />

          <SliderModule
            prompt={"My perceived sense of ability (self-efficacy) in reflecting on this adversity is that..."}
            info={null}
            scale={scales.ability}
            value={state.ability_level}
            handleInput={handleInput("ability_level")}
            leftDetail={["The adversity is too much for me", "I'm not strong enough"]}
            rightDetail={["It won't be easy but I can do this", "I am strong enough"]}
          />

        </div>

        <div className="data-module-row">

          <div className="data-module">

            <PromptModule 
              prompt={"I perceive my need..."}
              info={null}
            />

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

            <div className="text">because...<input value={state.need_reason} onChange={handleInput("need_reason")}></input></div>
            
          </div>

          <SliderModule
            prompt={"My perceived sense of pressure..."}
            info={null}
            scale={scales.pressure}
            value={state.pressure_level}
            handleInput={handleInput("pressure_level")}
          />

        </div>

      </div>

    </div>
  );
};
