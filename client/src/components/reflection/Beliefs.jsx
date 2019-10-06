import React, { useState } from "react";
import '../stylesheets/Reflection.css';

export const Beliefs = () => {
  const [belief, setBelief] = useState('Beliefs');
  return (
    <div className="beliefs">{belief}</div>
  );
};