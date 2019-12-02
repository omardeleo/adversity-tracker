import React from 'react';
import { PromptModule } from './PromptModule';

export const InputModule = props => {

  const { prompt, info, value, handleInput, placeholder } = props;

  const inputSubModule = <input value={value} onChange={handleInput}></input>

  if (prompt) {
    return (
      <div className="data-module">
        <PromptModule
          prompt={prompt}
          info={info}
        />
        {inputSubModule}
      </div>
    );
  } else {
    return inputSubModule;
  }

};