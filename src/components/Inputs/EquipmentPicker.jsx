import React, { useContext } from 'react';
import { EqTypes } from '../../data';
import { LanguageContext } from '../../provider/Language';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const EquipmentPicker = ({ eqType, dispatch, types }) => {
  const [language] = useContext(LanguageContext);

  const EquipmentTypes = types ? types : EqTypes;

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{language.label.equipmentType}</InputLabel>
      <Select
        label={language.label.equipmentType}
        value={eqType}
        onChange={(e) =>
          dispatch({ type: 'eqType', payload: { eqType: e.target.value } })
        }
      >
        {EquipmentTypes.map((eqt) => (
          <MenuItem value={eqt} key={eqt} disableGutters>
            <ListItem
              component="div"
              dense
              disableGutters
              style={{ padding: 0 }}
            >
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <img
                  src={require(`../../images/EquipmentType/${eqt}.png`)}
                  alt={eqt}
                />
              </ListItemIcon>
              <ListItemText primary={language.eqType[eqt]} />
            </ListItem>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(EquipmentPicker);
