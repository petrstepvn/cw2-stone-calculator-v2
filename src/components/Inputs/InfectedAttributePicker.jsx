import React, { useContext, useEffect, useState } from 'react';
import { Infected, Synthesis } from '../../data';
import { LanguageContext } from '../../provider/Language';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 260,
  },
  menu: {
    maxHeight: '400px',
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listHeader: {
    textTransform: 'uppercase',
    fontStyle: 'italic',
    paddingLeft: '1.5em',
    pointerEvents: 'none',
    userSelect: 'none',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#383838',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function compare(a, b) {
  if (a.group < b.group) {
    return -1;
  }
  if (a.group > b.group) {
    return 1;
  }
  return 0;
}

const InfectedAttributePicker = ({
  selectedInfected,
  dispatch,
  eqType,
  selectedStoneIsEmpower = false,
  isSynthesis = false,
  customPropName = 'selectedInfected',
  customLabel = 'infectedAttribute',
  customIndex = 0,
}) => {
  const attributesData = isSynthesis ? Synthesis : Infected;
  const [filteredInfected, setFilteredInfected] = useState(attributesData);
  const [groups, setGroups] = useState(['']);
  const [language] = useContext(LanguageContext);
  const classes = useStyles();

  useEffect(() => {
    setFilteredInfected(
      attributesData.filter((inf) => inf.eqType.includes(eqType))
    );
  }, [eqType]);

  useEffect(() => {
    if (selectedStoneIsEmpower) {
      setGroups(attributesData.sort(compare));
      setFilteredInfected(attributesData);
    } else {
      const groupArray = filteredInfected.map((x) => x.group);
      const groupSet = new Set(groupArray);
      const uniqueGroups = [...groupSet];
      setGroups(uniqueGroups);
      setFilteredInfected(
        attributesData.filter((inf) => inf.eqType.includes(eqType))
      );
    }
  }, [selectedStoneIsEmpower]);

  useEffect(() => {
    const groupArray = filteredInfected.map((x) => x.group);
    const groupSet = new Set(groupArray);
    const uniqueGroups = [...groupSet];
    setGroups(uniqueGroups);
  }, [filteredInfected]);

  useEffect(() => {
    dispatch({
      type: 'selectedInfected',
      payload: {
        [customPropName]: filteredInfected[customIndex],
      },
    });
  }, [filteredInfected, dispatch]);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{language.label[customLabel]}</InputLabel>
      <Select
        label={language.label[customLabel]}
        value={selectedInfected}
        onChange={(e) =>
          dispatch({
            type: 'selectedInfected',
            payload: {
              [customPropName]: e.target.value,
            },
          })
        }
      >
        {groups.map((group) => [
          <ListSubheader
            className={classes.listHeader}
            key={group}
            disableSticky
          >
            &#9679; {language.attributeGroup[group]}
          </ListSubheader>,
          filteredInfected
            .sort(compare)
            .filter((inf) => inf.group === group)
            .map((inf) => (
              <MenuItem value={inf} key={inf.attribute}>
                <ListItemText primary={language.attribute[inf.attribute]} />
              </MenuItem>
            )),
        ])}
        {/* {filteredInfected.map((inf) => (
          <MenuItem value={inf} key={inf.attribute}>
            <ListItemText primary={language.attribute[inf.attribute]} />
          </MenuItem>
        ))} */}
      </Select>
    </FormControl>
  );
};

export default React.memo(InfectedAttributePicker);
