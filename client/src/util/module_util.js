// handleInput Utility accepts a key as a string and sets input value in state
// export const handleInput = key => e => {
//   let value = e.target ? e.target.value : e.value;
//   setState({
//     ...state,
//     [key]: value
//   });
// };

// handle accept can be configured as necessary
export const handleAccept = (action, state) => {
    action(state);
};

// handle clear restores default state
export const handleClear = (action, defaultState) => {
  action(defaultState);
};