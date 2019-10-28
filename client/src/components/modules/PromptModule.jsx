import React from 'react';

export const PromptModule = props => {
  const { prompt, info } = props;

  return (
    <div className="text">
      <span>{prompt}</span>
      <div className="info">i</div>
    </div>
  );

};
