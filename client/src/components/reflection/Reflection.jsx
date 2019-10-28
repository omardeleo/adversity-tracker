import React from 'react';
import Beliefs from './beliefs/BeliefsContainer';

import '../stylesheets/Reflection.css';
import '../stylesheets/modules.css';
import '../stylesheets/header_module.css';

export const Reflection = props => {
  
  return(
    <div className="form-wrapper">
      <Beliefs generateFormButtons={props.generateFormButtons}/>
    </div>
  );

};