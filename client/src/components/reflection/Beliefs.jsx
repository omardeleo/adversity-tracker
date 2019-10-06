import React, { useState } from "react";
import '../stylesheets/Reflection.css';

export const Beliefs = () => {
  const [belief, setBelief] = useState('Beliefs');
  return (
    <div className="beliefs">
      <div className='module-label'>Beliefs</div>
    </div>
  );
};