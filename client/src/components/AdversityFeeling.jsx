import React from "react";

import TextField from "@material-ui/core/TextField";
import FeelingsSlider from "./CustomSlider";
import { useStyles } from '../util/ui_util';
import { Add } from "@material-ui/icons";
// import { CustomSlider } from './ui/CustomSlider';

import './AdversityFeeling.css';
import './stylesheets/recognition.css';



const FeelingItem = props => {
    const { feeling, sliderVal } = props.feeling;
    const classes = useStyles();
    // const feelingScale = ["mildly", "moderately", "intensely"];

    return (
        <div className="feeling-row">
            <TextField
                className={classes.root}
                placeholder="Enter Feeling"
                value={feeling}
                margin="normal"
                variant="outlined"
                inputProps={{
                    "aria-label": "adversity-feeling",
                    className: classes.input
                }}
                onChange={(e) => {
                    props.handleFeelingTextChange({index: props.index, feeling: e.target.value})
                }}
            />
                <div className="slider-label">intensity</div>
      
            <div className="input-wrapper">
            <div className="slider">
                <div className='slider-container'>
                <FeelingsSlider
                    sliderVal={sliderVal}
                    handleChange={props.handleSliderChange}
                    className={classes.slider}
                    index={props.index}
                />
                <div className="slider-values">
                <div className="slider-value">mildly</div>
                    <div className="slider-value">moderately</div>
                    <div className="slider-value">intensely</div>
                </div>
                    </div>
            </div>

            </div>
        </div>
    );
};

class AdversityFeeling extends React.Component { 
    
    render() {

        const feelingItems = this.props.feelings.map((feeling, i) => (
            <FeelingItem
                key={i}
                index={i}
                feeling={feeling}
                handleSliderChange={this.props.handleSliderChange}
                handleFeelingTextChange={this.props.handleFeelingTextChange}
            />
        ));

        return (
            <div className="adv-feeling-container">
                <div className="adv-feeling">
                    <span className="feelings-tracker-label">
                        I'm noticing I'm feeling...
                    </span>
                    <div className="feeling-main">
                        {feelingItems}
                    </div>
                </div>
                <Add className="add-feeling" onClick={this.props.handleAddSlider} />
            </div>
        );
    };

};

export default AdversityFeeling;