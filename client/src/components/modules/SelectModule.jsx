import React from 'react';
import { PromptModule } from './PromptModule';

export const SelectModule = props => {

  const { prompt, info, handleInput, placeholder, options } = props;

  const selectSubModule = 
        <div className="input-wrapper">
          <select onChange={handleInput}>
            <option value="">{placeholder}</option>
            {options}
          </select>
        </div>

  if (prompt) {
    return (
      <div className="data-module">
        <PromptModule
          prompt={prompt}
          info={info}
        />
        {selectSubModule}
      </div>
    );
  } else {
    return selectSubModule;
  }


};