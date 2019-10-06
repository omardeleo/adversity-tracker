import React, { useState } from "react";
import BeliefsSlider from "../CustomSlider";
import { useStyles } from '../../util/ui_util';
import '../stylesheets/Reflection.css';

export const Beliefs = () => {
  const [belief, setBelief] = useState('Beliefs');
  const classes = useStyles();
  const sliderVal = 1;
  const index = 1;

  return (
    <div className="beliefs">
      <div className='module-label'>Beliefs</div>
      <BeliefsSlider
        sliderVal={sliderVal}
        // handleChange={props.handleSliderChange}
        className={classes.slider}
        index={index}
      />
    </div>
  );
};