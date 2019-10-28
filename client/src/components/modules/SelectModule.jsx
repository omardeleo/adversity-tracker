import React from 'react';
import { QuestionModule } from './QuestionModule';

export const SelectModule = props => {

  const { question, info, handleInput, placeholder, options } = props;

  const selectSubModule = 
        <div className="input-wrapper">
          <select onChange={handleInput}>
            <option value="">{placeholder}</option>
            {options}
          </select>
        </div>

  if (question) {
    return (
      <div className="data-module">
        <QuestionModule
          question={question}
          info={info}
        />
        {selectSubModule}
      </div>
    );
  } else {
    return selectSubModule;
  }


};