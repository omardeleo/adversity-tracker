import React from 'react';

export const TextModule = props => {

  const { question, value, handleInput } = props;

  return (

    <div className="data-module">
      <div className="text">
        <span>{question}</span>
      </div>
      <textarea value={value} onChange={handleInput}></textarea>
    </div>

  );

};