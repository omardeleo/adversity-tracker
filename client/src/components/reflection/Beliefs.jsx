import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CustomSlider } from '../ui/CustomSlider';
import AdversityTitle from "../AdversityTitle";
import { fetchBeliefs } from "../../actions/belief_actions";

import '../AdversityTitle.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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

  const [adversity, setAdversity] = useState(props.adversityTitle);
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


  const classes = useStyles();


  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleAdversity = e => {
    setAdversity(e.target.value);
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
    setAdversity('');
    setBeliefText('');
    setControlLevel(0);
    setAbilityLevel(0);
    setNeedLevel(0);
    setNeed('Need Goes Here');
    setNeedReason('');
    setPressureLevel(0);
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
                          <Select
                            value={adversity}
                            onChange={handleAdversity}
                            labelwidth={labelWidth}
                          >
                            <MenuItem value={adversity}>
                              {adversity}
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </form> 
        </div>
        {formButtons}
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
                <form className={classes.root} autoComplete="off">
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Need
                  </InputLabel>
                  <Select
                    value={need}
                    onChange={handleNeed}
                    labelwidth={labelWidth}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
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