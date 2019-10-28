import React from 'react';
import { PromptModule } from './PromptModule';

export const TextModule = props => {

  const { prompt, info, value, handleInput, placeholder } = props;

  const textSubModule = <textarea value={value} placeholder={placeholder} onChange={handleInput}></textarea>

  if (prompt) {
    return (
      <div className="data-module">
        <PromptModule
          prompt={prompt}
          info={info}
        />
        {textSubModule}
      </div>
    );
  } else {
    return textSubModule;
  }

};