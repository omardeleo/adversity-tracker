import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { PromptModule } from "../modules/PromptModule";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export const OptionsModule = props => {
  const classes = useStyles();
  const { prompt, value, info, handleInput, placeholder, options } = props;

  const optionSubModule =
    <div className="input-wrapper">
      <FormControl className={classes.formControl}>
      <Select
        multiple
        native
        value={value}
        onChange={handleInput}
        inputProps={{
          id: 'select-multiple-native',
        }}
      >
        {options}
      </Select>
      </FormControl>
    </div>

  if (prompt) {
    return (
      <div className="data-module">
        <PromptModule
          prompt={prompt}
          info={info}
        />
        {optionSubModule}
      </div>
    );
  } else {
    return optionSubModule;
  }


};