import React, { useState, useEffect } from "react";
import { SliderModule } from "../../../modules/SliderModule";
import { SelectModule } from "../../../modules/SelectModule";
import { TextModule } from "../../../modules/TextModule";
import { PromptModule } from "../../../modules/PromptModule";
import * as scales from "../../../ui/slider_scales";
import { needsList } from "../../../inventory/needs";

export const Beliefs = props => {

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
            prompt={"Why does this feel like an adversity?"}
            info={null}
            value={state.belief_text}
            handleInput={handleInput("belief_text")}
            placeholder={"Discuss an adversity"}
          />
       

        <div className="data-module-row">
          <SliderModule
            prompt={
              "My perceived sense of control (locus of control) in reflecting on this adversity is that..."
            }
            info={null}
            scale={scales.control}
            value={state.control_level}
            handleInput={handleInput("control_level")}
            leftDetail={[
              "The outcome is out of my control",
              "Things happen to me"
            ]}
            rightDetail={[
              "The outcome is within my control",
              "I make things happen"
            ]}
          />

          <SliderModule
            prompt={
              "My perceived sense of ability (self-efficacy) in reflecting on this adversity is that..."
            }
            info={null}
            scale={scales.ability}
            value={state.ability_level}
            handleInput={handleInput("ability_level")}
            leftDetail={[
              "The adversity is too much for me",
              "I'm not strong enough"
            ]}
            rightDetail={[
              "It won't be easy but I can do this",
              "I am strong enough"
            ]}
          />
        </div>
        
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
