import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../provider/Language';
import { Stones } from '../../data';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const StonePicker = ({ selectedStone, dispatch, eqType, infected }) => {
  const [filteredStones, setFilteredStones] = useState(Stones.slice(1, 2));
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setFilteredStones(Stones.filter((stone) => stone.eqType.includes(eqType)));
  }, [eqType]);

  useEffect(() => {
    dispatch({
      type: 'selectedStone',
      payload: {
        selectedStone: filteredStones[0],
      },
    });
  }, [filteredStones, dispatch]);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{language.label.selectAStone}</InputLabel>
      <Select
        label={language.label.selectAStone}
        value={selectedStone}
        onChange={(e) =>
          dispatch({
            type: 'selectedStone',
            payload: {
              selectedStone: e.target.value,
            },
          })
        }
      >
        {filteredStones.map((stone) => (
          <MenuItem value={stone} key={stone.id}>
            <ListItemIcon>
              <img
                alt={stone.id}
                src={require(`../../images/stones/${infected ? '9' : ''}${
                  stone.id
                }.png`)}
              />
            </ListItemIcon>
            <ListItemText
              primary={language.stone[stone.name]}
              secondary={language.attribute[stone.attribute]}
              style={{ display: 'inline-block' }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(StonePicker);
