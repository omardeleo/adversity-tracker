import React from 'react';
import { QuestionModule } from './QuestionModule';

export const TextModule = props => {

  const { question, info, value, handleInput, placeholder } = props;

  const textSubModule = <textarea value={value} placeholder={placeholder} onChange={handleInput}></textarea>

  if (question) {
    return (
      <div className="data-module">
        <QuestionModule
          question={question}
          info={info}
        />
        {textSubModule}
      </div>
    );
  } else {
    return textSubModule;
  }

};