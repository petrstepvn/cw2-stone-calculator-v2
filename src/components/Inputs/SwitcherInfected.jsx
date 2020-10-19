import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { LanguageContext } from '../../provider/Language';

const SwitcherInfected = ({ infected, dispatch }) => {
  const [language] = useContext(LanguageContext);

  return (
    <FormControlLabel
      control={
        <Switch
          color="primary"
          checked={infected}
          onChange={() =>
            dispatch({ type: 'infected', payload: { infected: !infected } })
          }
        />
      }
      label={language.label.infected}
    />
  );
};

export default SwitcherInfected;
