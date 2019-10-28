import React from 'react';

export const SelectModule = props => {

  const { handleInput, placeholder, options } = props;

  return(

    <div className="input-wrapper">
      <select onChange={handleInput}>
        <option value="">{placeholder}</option>
        {options}
      </select>
    </div>

  );

};