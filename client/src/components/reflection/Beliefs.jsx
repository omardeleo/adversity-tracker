import React, { useState } from "react";
import { CustomSlider } from '../ui/CustomSlider';

export const Beliefs = () => {
  const [beliefText, setBeliefText] = useState('');

  const [control, setControl] = useState(0);
  const controlScale = ["External", "Internal"];

  const [ability, setAbility] = useState(0);
  const abilityScale = ["Can't", "Can"];

  const [need, setNeed] = useState(0);
  const [needOption, setNeedOption] = useState();
  const [needText, setNeedText] = useState('');
  const needScale = ["Unmet", "Partially Met", "Met"];

  const [pressure, setPressure] = useState(0);
  const pressureScale = ["Manageable", "Unsustainable", "Breaking Point"];

  const handleBeliefText = e => {
    setBeliefText(e.target.value);
  };

  const handleNeedOption = e => {
    setNeedOption(e.target.value);
  };

  const handleNeedText = e => {
    setNeedText(e.target.value);
  };

  return (
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
                value={control}
                handleChange={setControl}
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
                value={ability}
                handleChange={setAbility}
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
              <option value={needOption} onChange={handleNeedOption}>SELECT</option>
            </div>
              <div className="info">i</div>
          </div>
          <div className="description">is...</div>

          <div className="belief-data">
            <CustomSlider
              scale={needScale}
              value={need}
              handleChange={setNeed}
            />
          </div>
  
          <div className="description">because...<input value={needText} onChange={handleNeedText}></input></div>
        </div>

        <div className="belief">
          <div className="description">
            <span>My perceived sense of pressure...</span>
            <div className="info">i</div>
          </div>

          <div className="belief-data">
            <CustomSlider
              scale={pressureScale}
              value={pressure}
              handleChange={setPressure}
            />
          </div>

        </div>

      </div>
      

    </div>
  );
};