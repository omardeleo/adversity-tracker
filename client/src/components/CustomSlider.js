import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Slider, Popover } from '@material-ui/core';

import './CustomSlider.css';

const feelingsBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
    {
        value: 0
    },
    {
        value: 33
    },
    {
        value: 67
    },
    {
        value: 100
    }
];

const FeelingsSlider = withStyles({
    root: {
        color: "#505050",
        height: 2,
        padding: "15px 0"
    },
    thumb: {
        height: 20,
        width: 8,
        borderRadius: 3,
        border: "1px solid black",
        backgroundColor: "#fff",
        boxShadow: feelingsBoxShadow,
        marginTop: -10,
        // marginLeft: -6,
        "&:focus,&:hover,&$active": {
            boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                boxShadow: feelingsBoxShadow
            }
        }
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 11px)",
        top: -22,
        "& *": {
            background: "transparent",
            color: "#000"
        }
    },
    track: {
        height: 2
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: "#bfbfbf",
    },
    mark: {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        marginTop: -3
    },
    markActive: {
        backgroundColor: "currentColor"
    }
})(Slider);

export default function CustomizedSlider(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <div className="feelings-slider">
            <button className="transparent-button" aria-describedby={id} variant="contained" onClick={handleClick}>
                <img className="small-emotion-image" src={process.env.PUBLIC_URL + "/static/images/small.png"} />
            </button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                    }}
                >
                    <img className="big-emotion-image" src={process.env.PUBLIC_URL + "/static/images/big.png"} />
                 </Popover>
            
            <div className="slider-label">intensity</div>
            <div className="slider-container" data-order={props.order}>
                <FeelingsSlider
                    aria-label="feelings slider"
                    value={props.sliderVal}
                    marks={marks}
                    valueLabelDisplay="off"
                    onChange={(e, val) => props.handleChange({index: props.index, value: val})}
                />
                <div className="slider-values">
                    <div className="slider-value">mildly</div>
                    <div className="slider-value">moderately</div>
                    <div className="slider-value">intensely</div>
                </div>
            </div>
        </div>
    );
}
