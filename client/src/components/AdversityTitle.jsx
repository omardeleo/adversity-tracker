import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import './AdversityTitle.css';

const useStyles = makeStyles(theme => ({
    advTitleField: {
        height: 50,
        background: "#181818",
        boxShadow: "5px 5px 8px 0px rgba(0,0,0,0.3)",
        borderRadius: 5,
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
        color: "#a9a9a9"
    }
}));

export default function AdversityTitle(props) {
    const classes = useStyles();
    return (
        <div className="adv-title">
            <div className="adv-title-label">Adversity Experience Title...</div>
            <TextField
                className={classes.advTitleField}
                InputProps={{
                    className: classes.advTitleField,
                    "aria-label": "adversity-title"
                }}
                placeholder="Enter Title"
                defaultValue=""
                margin="normal"
                variant="outlined"
                onChange={e => props.handleTitle(e.target.value)}
            />
        </div>
    );
}