import React from 'react';

export const QuestionModule = props => {
  const { question, info } = props;

  return (
    <div className="text">
      <span>{question}</span>
      <div className="info">i</div>
    </div>
  );

};
