import React from 'react';
import Beliefs from './beliefs/BeliefsContainer';

import '../stylesheets/Reflection.css';
import '../stylesheets/modules.css'

export const Reflection = props => {
  
  return(
    <div className="tab-wrapper">
      <Beliefs generateFormButtons={props.generateFormButtons}/>
    </div>
  );

};