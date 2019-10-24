import React, { useState, useEffect } from "react";
import { CustomSlider } from '../../ui/CustomSlider';
import { needs } from '../../inventory/needs';
import '../../AdversityTitle.css';

export const Beliefs = props => {

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

  const [state, setState] = useState(defaultState);

  useEffect(() => {
    if (props.adversities.length === 0) {
      props.fetchAdversities(props.currentUser.id);
    }
  });

  const handleInput = field => e => {
    let value = e.target ? e.target.value : e.value;
    setState({
      ...state,
      [field]: value
    });
  };

  const handleAccept = () => {
    const { createBelief } = props;
    createBelief(state);
  };

  const handleClear = () => {
    setState(defaultState);
  };

  const actions = {accept: handleAccept, clear: handleClear};
  const formButtons = props.generateFormButtons(actions);

  const controlScale = ["External", "Internal"];
  const abilityScale = ["Can't", "Can"];
  const needScale = ["Unmet", "Partially Met", "Met"];
  const pressureScale = ["Manageable", "Unsustainable", "Breaking Point"];

  const adversitiesList = props.adversities.map((adv, i) => <option key={i} value={adv.id}>{adv.title}</option>);
  const needsList = needs.map((need, i) => <option key={i} value={need}>{need}</option>);

  
  return (
    <div className="module-wrapper">
      <div className="header-wrapper">
          <div className="adv-title">
          <div className="adv-title-label">Adversity Experience Title...</div>
              <div className="belief-data">
              <select onChange={handleInput('adversity_id')}>
                  <option value={props.adversityId}>{props.adversityTitle}</option>
                  {adversitiesList}
                </select>
              </div>
            </div>
            {formButtons}
      </div>
      <div className="beliefs">
        <div className='module-label'>Beliefs</div>

        <div className="belief-text">
          <span>Why does this feel like an adversity?</span>
          <textarea value={state.belief_text} onChange={handleInput('belief_text')}></textarea>
        </div>

        <div className="beliefs-sliders">

            <div className="belief">
            <div className="description">
              <span>My perceived sense of control (locus of control) in reflecting on this adversity is that...</span>
              <div className="info">i</div>
            </div>

              <div className="belief-data">
                <CustomSlider
                  scale={controlScale}
                  value={state.control_level}
                  handleChange={handleInput('control_level')}
                />
                <div className="slider-details">
                  <ul className="sub-detail">
                    <li>The outcome is out of my control</li>
                    <li>Things happen to me</li>
                  </ul>
                  <ul className="sub-detail">
                    <li>The outcome is within my control</li>
                    <li>I make things happen</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="belief">
              <div className="description">
                <span>My perceived sense of ability (self-efficacy) in reflecting on this adversity is that...</span>
                <div className="info">i</div>
                </div>
            
              <div className="belief-data">
                <CustomSlider
                  scale={abilityScale}
                  value={state.adversitiesability_level}
                  handleChange={handleInput({field:'ability_level'})}
                />
                <div className="slider-details">
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

        <div className="beliefs-sliders">

          <div className="belief">
            <div className="description">
              <div>
                <div className="description">I perceive my need...<div className="info">i</div></div>
                <div className="belief-data">
                  <select onChange={handleInput('need')}>
                    <option value="">Select a Need</option>
                    {needsList}
                  </select>
                </div>
              </div>
                
            </div>
            <div className="description">is...</div>

            <div className="belief-data">
              <CustomSlider
                scale={needScale}
                value={state.need_level}
                handleChange={handleInput('need_level')}
              />
            </div>
    
            <div className="description">because...<input value={state.need_reason} onChange={handleInput('need_reason')}></input></div>
          </div>

          <div className="belief">
            <div className="description">
              <span>My perceived sense of pressure...</span>
              <div className="info">i</div>
            </div>

            <div className="belief-data">
              <CustomSlider
                scale={pressureScale}
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
