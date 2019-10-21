import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { CustomSlider } from '../ui/CustomSlider';

import '../AdversityTitle.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: 3,
    boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    color: 'white',
    padding: '0 30px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export const Beliefs = props => {

  const classes = useStyles();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  const [controlLevel, setControlLevel] = useState(0);
  const controlScale = ["External", "Internal"];

  const [abilityLevel, setAbilityLevel] = useState(0);
  const abilityScale = ["Can't", "Can"];

  const [needLevel, setNeedLevel] = useState(0);
  const needScale = ["Unmet", "Partially Met", "Met"];

  const [pressureLevel, setPressureLevel] = useState(0);
  const pressureScale = ["Manageable", "Unsustainable", "Breaking Point"];

  const [input, setInput] = useState({
    adversity_id: props.adversityId,
    adversity: props.adversityTitle,
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
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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
      need: 'Need',
      need_reason: '',});
  };

  const actions = {accept: handleAccept, clear: handleClear};
  
  const formButtons = props.generateFormButtons(actions);
  
  return (
    <div className="module-wrapper">
      <div className="header-wrapper">
          <div className="adv-title">
          <div className="adv-title-label">Adversity Experience Title...</div>
                      <form className={classes.root} autoComplete="off">
                        <FormControl variant="outlined" className={classes.formControl}>
                          <NativeSelect
                            value={input.adversity}
                            onChange={handleChange('adversity')}
                            labelwidth={labelWidth}
                            inputProps={{
                                name: 'adversity',
                                id: 'outlined-adversity-native-simple'
                            }}
                          >
                            <option value={input.adversity}>
                              {input.adversity}
                            </option>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                          </NativeSelect>
                        </FormControl>
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
                <form className={classes.root} autoComplete="off">
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Need
                  </InputLabel>
                  <NativeSelect
                    value={input.need}
                    onChange={handleChange('need')}
                    labelwidth={labelWidth}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-simple',
                    }}
                  >
                    <option value="">
                      <em>None</em>
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
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