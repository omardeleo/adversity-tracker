import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import './AdversityStory.css';

const useStyles = makeStyles(theme => ({
    advStoryField: {
        height: 70,
        width: 410,
        background: "#181818",
        boxShadow: "5px 5px 8px 0px rgba(0,0,0,0.3)",
        borderRadius: 5,
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#a9a9a9",
            },
            "&:hover fieldset": {
                borderColor: "#606060"
            },
            "&.Mui-focused fieldset": {
                borderColor: "darkGrey"
            }
        },
        color: "#a9a9a9",
    }
}));

export default function AdversityStory(props) {
    const classes = useStyles();
    return (
        <div className="adv-story">
            <div className="adv-story-label">The story is...</div>
            <TextField
                className={classes.advStoryField}
                InputProps={{
                    className: classes.advStoryField,
                    "aria-label": "adversity-story"
                }}
                placeholder="Enter Story"
                value={props.story}
                margin="normal"
                variant="outlined"
                multiline={true}
                rows="2"
                // eslint-disable-next-line
                inputProps={{ "aria-label": "adversity-story" }}
                onChange={e => props.handleStory({index: props.index, value: e.target.value})}
            />
        </div>
    );
}