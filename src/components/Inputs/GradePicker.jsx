import React, { useContext } from 'react';
import { Grades } from '../../data';
import { LanguageContext } from '../../provider/Language';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from '@material-ui/core';

const GradePicker = ({ type, value, dispatch }) => {
  const [language] = useContext(LanguageContext);

  return (
    <FormControl fullWidth variant="outlined" id={type}>
      <InputLabel>{language.label[type]}</InputLabel>
      <Select
        label={language.label[type]}
        value={value}
        onChange={(e) =>
          dispatch({
            type: type,
            payload: {
              [type]: e.target.value,
            },
          })
        }
      >
        {Grades.map((color, index) => (
          <MenuItem
            value={index}
            key={index}
            style={index === 0 ? { fontStyle: 'italic' } : null}
          >
            <ListItemText
              style={{ color: `#${color}` }}
              primary={language.grade[index]}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(GradePicker);
