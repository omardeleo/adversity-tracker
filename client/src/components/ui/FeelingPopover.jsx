import React from "react";
import { Popover } from '@material-ui/core';

export const FeelingPopover = () => {
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
  <div>
      <button className="transparent-button" aria-describedby={id} variant="contained" onClick={handleClick}>
        <img className="small-emotion-image" alt="small_emotion_image" src={process.env.PUBLIC_URL + "/static/images/small.png"} />
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
      <img className="big-emotion-image" alt="big_emotion_image" src={process.env.PUBLIC_URL + "/static/images/big.png"} />
      </Popover>
    </div>
  );
};