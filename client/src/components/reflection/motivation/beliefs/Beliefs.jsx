import React, { useState, useEffect } from "react";
import { SliderModule } from "../../../modules/SliderModule";
import { TextModule } from "../../../modules/TextModule";
import * as scales from "../../../ui/slider_scales";

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
          <SliderModule
            prompt={
              "My perceived sense of self-pity is..."
            }
            info={null}
            scale={scales.pity}
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

          <SliderModule
            prompt={
              "My perceived sense of lovability..."
            }
            info={null}
            scale={scales.lovability}
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
          <SliderModule
            prompt={
              "My perceived sense of self-esteem is..."
            }
            info={null}
            scale={scales.esteem}
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

          <SliderModule
            prompt={
              "My perceived sense of self-respect..."
            }
            info={null}
            scale={scales.lovability}
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
    </div>
  );
};
