import React from 'react';
import Beliefs from './BeliefsContainer';

import '../stylesheets/Reflection.css';

export const Reflection = props => {
  
  return(
    <div className="reflection">
      <Beliefs generateFormButtons={props.generateFormButtons}/>
    </div>
  );

};