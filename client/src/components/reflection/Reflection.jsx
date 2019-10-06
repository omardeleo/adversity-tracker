import React from 'react';

import { Beliefs } from './Beliefs';
import { Needs } from './Needs';

import '../stylesheets/Reflection.css';

export const Reflection = () => {

  return(
    <div className="reflection">
      <Beliefs />
      <Needs />
    </div>
  );

};