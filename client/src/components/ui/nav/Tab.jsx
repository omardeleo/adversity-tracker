import React from "react";

import '../../NavTab.css';

export default function NavTab(props) {
  const selected = props.selected ? " nav-selected" : "";
  return (
    <button
      className={`navigation-button${selected}`}
      value={props.section}
      onClick={props.handleClick}
    >
      {props.section}
    </button>
  );
}