import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Add } from "@material-ui/icons";

import FeelingsSlider from "./CustomSlider";
import './AdversityFeeling.css';

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#a9a9a9"
            },
            "&:hover fieldset": {
                borderColor: "#606060"
            },
            "&.Mui-focused fieldset": {
                borderColor: "darkGrey"
            }
        },
        color: "white",
        background: "#181818",
        boxShadow: "5px 5px 8px 0px rgba(0,0,0,0.3)"
    },
    input: {
        color: "#a9a9a9"
    }
}));

const FeelingItem = props => {
    const { feeling, sliderVal } = props.feeling;
    const classes = useStyles();

    return (
        <div className="feeling-row">
            <TextField
                className={classes.root}
                placeholder="Enter Feeling"
                defaultValue={feeling}
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
            <FeelingsSlider
                sliderVal={sliderVal}
                handleChange={props.handleSliderChange}
                className={classes.slider}
                index={props.index}
            />
        </div>
    );
};

class AdversityFeeling extends React.Component {  
    render() {
        return (
            <div className="adv-feeling-container">
                <div className="adv-feeling">
                    <div className="feelings-tracker-label">
                        I'm noticing I'm feeling...
          </div>
                    <div className="feeling-main">
                        <div className="feelings-container">
                            {this.props.feelings.map((feeling, i) => (
                                <FeelingItem
                                    key={i}
                                    index={i}
                                    feeling={feeling}
                                    handleSliderChange={this.props.handleSliderChange}
                                    handleFeelingTextChange={this.props.handleFeelingTextChange}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Add className="add-feeling" onClick={this.props.handleAddSlider} />
            </div>
        );
    }
}

export default AdversityFeeling;