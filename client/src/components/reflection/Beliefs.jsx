import React, { useState } from "react";
import { CustomSlider } from '../ui/CustomSlider';
import AdversityTitle from "../AdversityTitle";
import { fetchBeliefs } from "../../actions/belief_actions";


export const Beliefs = props => {
  const [beliefText, setBeliefText] = useState('');

  const [controlLevel, setControlLevel] = useState(0);
  const controlScale = ["External", "Internal"];

  const [abilityLevel, setAbilityLevel] = useState(0);
  const abilityScale = ["Can't", "Can"];

  const [needLevel, setNeedLevel] = useState(0);
  const [need, setNeed] = useState('Need Goes Here');
  const [needReason, setNeedReason] = useState('');
  const needScale = ["Unmet", "Partially Met", "Met"];

  const [pressureLevel, setPressureLevel] = useState(0);
  const pressureScale = ["Manageable", "Unsustainable", "Breaking Point"];

  const belief = { 
                  adversity_id: props.adversityId,
                  belief_text: beliefText,
                  control_level: controlLevel,
                  ability_level: abilityLevel,
                  need: need,
                  need_level: needLevel,
                  need_reason: needReason,
                  pressure_level: pressureLevel
                  };

  const handleBeliefText = e => {
    setBeliefText(e.target.value);
  };

  const handleNeed = e => {
    setNeed(e.target.value);
  };

  const handleNeedReason = e => {
    setNeedReason(e.target.value);
  };

  
  const handleAccept = () => {
    const { createBelief } = props;
    createBelief(belief);
  };

  const handleClear = () => {
    return console.log('TEST');
  };
  
  const title = props.adversityTitle;
  
  const actions = {accept: handleAccept, clear: handleClear};
  
  const formButtons = props.generateFormButtons(actions);
  
  return (
    <div className="module-wrapper">
      <div className="header-wrapper">
        <AdversityTitle title={title}/>{formButtons}
      </div>
      <div className="beliefs">
        <div className='module-label'>Beliefs</div>

        <div className="belief-text">
          <span>Why does this feel like an adversity?</span>
          <textarea value={beliefText} onChange={handleBeliefText}></textarea>
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
                  value={controlLevel}
                  handleChange={setControlLevel}
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
                  value={abilityLevel}
                  handleChange={setAbilityLevel}
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
                <span>I perceive my need...</span>
                <option value={need} onChange={handleNeed}>SELECT</option>
              </div>
                <div className="info">i</div>
            </div>
            <div className="description">is...</div>

            <div className="belief-data">
              <CustomSlider
                scale={needScale}
                value={needLevel}
                handleChange={setNeedLevel}
              />
            </div>
    
            <div className="description">because...<input value={needReason} onChange={handleNeedReason}></input></div>
          </div>

          <div className="belief">
            <div className="description">
              <span>My perceived sense of pressure...</span>
              <div className="info">i</div>
            </div>

            <div className="belief-data">
              <CustomSlider
                scale={pressureScale}
                value={pressureLevel}
                handleChange={setPressureLevel}
              />
            </div>

          </div>

        </div>
        

      </div>

    </div>
  );
};