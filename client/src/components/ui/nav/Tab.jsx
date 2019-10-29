import React from "react";

import '../../NavTab.css';

export default function NavTab(props) {
  const selected = props.selected ? " nav-selected" : "";
  return (
    <div
      className={`navigation-button${selected}`}
      onClick={props.handleClick}
    >
      {props.section}
    </div>
  );
}