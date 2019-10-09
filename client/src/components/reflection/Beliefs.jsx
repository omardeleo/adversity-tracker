import React, { useState } from "react";
import { CustomSlider } from '../ui/CustomSlider';

export const Beliefs = () => {
  const [control, setControl] = useState(0);
  const controlScale = ["External", "Internal"];

  const [ability, setAbility] = useState(0);
  const abilityScale = ["Can't", "Can"];

  return (
    <div className="beliefs">
      <div className='module-label'>Beliefs</div>

      <div className="beliefs-data">
        <div className="description">My perceived sense of control (locus of control) in reflecting on this adversity is that...</div> 
        <CustomSlider
          scale={controlScale}
          value={control}
          handleChange={setControl}
        />
        <div className="slider-details">
          <div className="sub-detail">
            <span>- The outcome is out of my control</span>
            <span>- Things happen to me</span>
          </div>
          <div className="sub-detail">
            <span>- The outcome is within my control</span>
            <span>- I make things happen</span>

          </div>
        </div>
      </div>

      <div className="beliefs-data"> 
        <div className="description">My perceived sense of ability (self-efficacy) in reflecting on this adversity is that...</div> 
        <CustomSlider
          scale={abilityScale}
          value={ability}
          handleChange={setAbility}
        />
        <div className="slider-details">
          <div className="sub-detail">
            <span>- The adversity is too much for me</span>
            <span>- I'm not strong enough</span>
          </div>
          <div className="sub-detail">
            <span>- It won't be easy but I can do this</span>
            <span>- I am strong enough</span>
          </div>
        </div>
       </div>


    </div>
  );
};