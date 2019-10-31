import React from 'react';
import Beliefs from './beliefs/BeliefsContainer';

import '../stylesheets/Reflection.css';
import '../stylesheets/modules.css';
import '../stylesheets/header_module.css';
import '../stylesheets/journal_nav.css';

export const Reflection = () => {
  
  return(
    <div className="form-wrapper">
      <Beliefs />
    </div>
  );

};