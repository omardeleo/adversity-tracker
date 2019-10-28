import React from 'react';
import { CustomSlider } from '../ui/CustomSlider';

export const SliderModule = props => {

  const {scale, value, handleInput, leftDetail, rightDetail} = props;

  const generateSubDetail = detail => {
      let subDetail = detail.map((detail, i) => <li key={i}>{detail}</li>);
      return subDetail
  };

  const sliderDetails = () => { 
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

  return(

    <div className="input-wrapper">
      <CustomSlider
        scale={scale}
        value={value}
        handleChange={handleInput}
      />
      {sliderDetails()}
    </div>

  );

};