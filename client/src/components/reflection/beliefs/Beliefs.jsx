import React, { useState } from "react";
import { CustomSlider } from '../../ui/CustomSlider';
import { SliderModule } from '../../modules/SliderModule';
import HeaderModule from '../../modules/HeaderModule';
import * as scales from '../../ui/scales';
import { needsList } from '../../inventory/needs';
import '../../AdversityTitle.css';

export const Beliefs = props => {

  // Define default state
  const defaultState = {
    adversity_id: props.adversityId,
    adversity: props.adversityTitle,
    control_level: 0,
    ability_level: 0,
    need_level: 0,
    pressure_level: 0,
    belief_text: '',
    need: 'Need',
    need_reason: '',
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

      <HeaderModule state={state} actions={actions} handleInput={handleInput('adversity_id')}/>

      <div className="sub-tab-wrapper">

        <div className='sub-tab-label'>Beliefs</div>
        <div className="data-module">
          <div className="text">
            <span>Why does this feel like an adversity?</span>
          </div>
          <textarea value={state.belief_text} onChange={handleInput('belief_text')}></textarea>
        </div>

        <div className="data-module-row">

            <div className="data-module">

              <div className="text">
                <span>My perceived sense of control (locus of control) in reflecting on this adversity is that...</span>
                <div className="info">i</div>
              </div>

              <SliderModule 
                scale={scales.control}
                value={state.control_level}
                handleChange={handleInput('control_level')}
                leftDetail={['The outcome is out of my control','Things happen to me']}
                rightDetail={['The outcome is within my control', 'I make things happen']}
              />

            </div>

            <div className="data-module">
              <div className="text">
                <span>My perceived sense of ability (self-efficacy) in reflecting on this adversity is that...</span>
                <div className="info">i</div>
                </div>
            
              <div className="input-wrapper">
                <CustomSlider
                  scale={scales.ability}
                  value={state.adversitiesability_level}
                  handleChange={handleInput('ability_level')}
                />
                <div className="slider-details">x
                  <ul className="sub-detail">
                    <li>The adversity is too much for me</li>
                    <li>I'm not strong enough</li>
                  </ul>
                  <ul className="sub-detail">
                    <li>It won't be easy but I can do this</li>
                    <li>I am strong enough</li>
                  </ul>
                </div>
              </div>
          </div>

        </div>

        <div className="data-module-row">

          <div className="data-module">
            <div className="text">I perceive my need...<div className="info">i</div></div>
            <div className="input-wrapper">
              <select onChange={handleInput('need')}>
                <option value="">Select a Need</option>
                {needsList}
              </select>
            </div>
            <div className="text">is...</div>
            <div className="input-wrapper">
              <CustomSlider
                scale={scales.need}
                value={state.need_level}
                handleChange={handleInput('need_level')}
              />
            </div>
            <div className="text">because...<input value={state.need_reason} onChange={handleInput('need_reason')}></input></div>
          </div>

          <div className="data-module">
            <div className="text">
              <span>My perceived sense of pressure...</span>
              <div className="info">i</div>
            </div>
            <div className="input-wrapper">
              <CustomSlider
                scale={scales.pressure}
                value={state.pressure_level}
                handleChange={handleInput('pressure_level')}
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
