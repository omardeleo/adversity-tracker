import React from "react";

export default function NavTab(props) {
  const active = props.default ? "selected" : "";

  return (
    <button
      id={props.section}
      className={`journal-tab ${active}`}
      value={props.section}
      onClick={props.handleClick}
    >
      {props.section}
    </button>
  );
}