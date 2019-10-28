import React from 'react';
import { CustomSlider } from '../ui/CustomSlider';

export const SliderModule = props => {

  const {scale, value, handleChange, leftDetail, rightDetail} = props;

  const generateSubDetail = detail=> {
    if (detail) {
      let subDetail = detail.map((detail, i) => <li key={i}>{detail}</li>);
      return subDetail
    }
    return null;
  };

  return(

    <div className="input-wrapper">
      <CustomSlider
        scale={scale}
        value={value}
        handleChange={handleChange}
      />
      <div className="slider-details">
        <ul className="sub-detail">
          {generateSubDetail(leftDetail)}
        </ul>
        <ul className="sub-detail">
          {generateSubDetail(rightDetail)}
        </ul>
      </div>
    </div>

  );

};