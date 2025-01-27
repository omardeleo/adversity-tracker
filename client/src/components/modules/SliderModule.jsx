import React from 'react';
import { CustomSlider } from '../ui/CustomSlider';
import { PromptModule } from './PromptModule';

export const SliderModule = props => {

  const { prompt, info, scale, value, handleInput, leftDetail, rightDetail} = props;


  const generateSubDetail = detail => {
      let subDetail = detail.map((detail, i) => <li key={i}>{detail}</li>);
      return subDetail
  };

  const generateSliderDetails = () => { 
      if (leftDetail || rightDetail) {
        return (
        <div className="slider-details">
          <ul className="sub-detail">
            {generateSubDetail(leftDetail)}
          </ul>
          <ul className="sub-detail">
            {generateSubDetail(rightDetail)}
          </ul>
        </div>
        )
      }
  };

  const sliderSubModule = 
    <div className="input-wrapper">
      <CustomSlider
        scale={scale}
        value={value}
        handleChange={handleInput}
      />
      {generateSliderDetails()}
    </div>


  if (prompt) {
    return(
      <div className="data-module">
        <PromptModule
          prompt={prompt}
          info={info}
        />
        {sliderSubModule}
      </div>
    );
  } else {
    return sliderSubModule;
  }

};