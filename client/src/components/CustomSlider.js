import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Slider } from '@material-ui/core';

import './CustomSlider.css';

const feelingsBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

export const marks = [
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

export const CustomSlider = withStyles({
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

    
    
    return (
        <div className="slider">
            <div className="slider-container" data-order={props.order}>
                <CustomSlider
                    aria-label="feelings slider"
                    value={props.sliderVal}
                    marks={marks}
                    valueLabelDisplay="off"
                    onChange={(e, val) => props.handleChange({index: props.index, value: val})}
                />
            </div>
        </div>

    );
};
