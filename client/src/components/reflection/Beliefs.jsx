import React, { useState, useEffect } from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
import { CustomSlider } from '../ui/CustomSlider';
import { needs } from '../inventory/needs';

import '../AdversityTitle.css';

export const Beliefs = props => {

  const [controlLevel, setControlLevel] = useState(0);
  const controlScale = ["External", "Internal"];

  const [abilityLevel, setAbilityLevel] = useState(0);
  const abilityScale = ["Can't", "Can"];

  const [needLevel, setNeedLevel] = useState(0);
  const needScale = ["Unmet", "Partially Met", "Met"];

  const [pressureLevel, setPressureLevel] = useState(0);
  const pressureScale = ["Manageable", "Unsustainable", "Breaking Point"];

  const [input, setInput] = useState({
    adversity_id: null,
    adversity: '',
    belief_text: '',
    need: 'Need',
    need_reason: '',
  });

  const belief = Object.assign(
    input, {
    control_level: controlLevel,
    ability_level: abilityLevel,
    need_level: needLevel,
    pressure_level: pressureLevel
  });

  useEffect(() => {
    if (props.adversities.length === 0) {
      props.fetchAdversities(props.currentUser.id);
    }
  });

  const handleChange = field => e => {
    setInput({
      ...input,
      [field]: e.target.value
    });
  };

  const handleAccept = () => {
    const { createBelief } = props;
    createBelief(belief);
  };

  const handleClear = () => {
    setControlLevel(0);
    setAbilityLevel(0);
    setNeedLevel(0);
    setPressureLevel(0);
    setInput({
      belief_text: '',
      need: '',
      need_reason: '',});
  };

  const adversitiesList = props.adversities.map((adv, i) => <option key={i} value={adv.id}>{adv.title}</option>);

  const needsList = needs.map((need, i) => <option key={i} value={need}>{need}</option>);

  const actions = {accept: handleAccept, clear: handleClear};
  const formButtons = props.generateFormButtons(actions);
  
  return (
    <div className="module-wrapper">
      <div className="header-wrapper">
          <div className="adv-title">
          <div className="adv-title-label">Adversity Experience Title...</div>
              <form>
                <NativeSelect onChange={handleChange('adversity_id')}>
                  <option value={props.adversityId}>{props.adversityTitle}</option>
                  {adversitiesList}
                </NativeSelect>
              </form>
            </div>
            {formButtons}
      </div>
      <div className="beliefs">
        <div className='module-label'>Beliefs</div>

        <div className="belief-text">
          <span>Why does this feel like an adversity?</span>
          <textarea value={input.belief_text} onChange={handleChange('belief_text')}></textarea>
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
                <form>
                  <NativeSelect onChange={handleChange('need')}>
                    <option value=''>Select a Need</option>
                    {needsList}
                  </NativeSelect>
                </form>
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
    
            <div className="description">because...<input value={belief.need_reason} onChange={handleChange('need_reason')}></input></div>
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