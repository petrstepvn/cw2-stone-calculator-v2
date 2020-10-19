import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { LanguageContext } from '../../provider/Language';

const SwitcherInfected = ({ empower, eqType, stoneId, dispatch }) => {
  const [language] = useContext(LanguageContext);

  return (
    <FormControlLabel
      control={
        <Switch
          color="primary"
          checked={empower}
          onChange={() =>
            dispatch({
              type: 'empower',
              payload: { empower: !empower, eqType: eqType, stoneId: stoneId },
            })
          }
        />
      }
      label={language.label.exoEmpower}
    />
  );
};

export default SwitcherInfected;
