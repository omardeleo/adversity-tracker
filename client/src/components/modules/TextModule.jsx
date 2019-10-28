import React from 'react';
import { QuestionModule } from './QuestionModule';

export const TextModule = props => {

  const { question, info, value, handleInput } = props;

  const textSubModule = <textarea value={value} onChange={handleInput}></textarea>

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