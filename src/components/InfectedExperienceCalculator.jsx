import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../provider/Language';
import {
  Typography,
  Slider,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ListItemText,
  List,
  ListSubheader,
} from '@material-ui/core';

import { InfectedExpPerLevel } from '../data';
import { thousandSeparator } from '../utils';

const calculateTotalExp = (min, max) => {
  const totalExp = InfectedExpPerLevel.slice(min, max + 1).reduce(
    (acc, curr) => acc + curr
  );
  const formattedExp = thousandSeparator(totalExp);
  return formattedExp;
};

const InfectedExperienceCalculator = () => {
  // const classes = useStyles();
  const [value, setValue] = useState([5, 20]);
  const [experience, setExperience] = useState(['']);
  const [fragments, setFragments] = useState([]);
  const [language] = useContext(LanguageContext);

  useEffect(() => {
    setExperience([
      calculateTotalExp(value[0], value[1]),
      calculateTotalExp(0, value[0]),
      calculateTotalExp(value[1], 30),
    ]);
  }, [value]);

  useEffect(() => {
    setFragments(
      experience.map((exp) => {
        const removedSpace = parseInt(exp.replace(/ /g, ''));
        const calculated = Math.ceil(removedSpace / 2000);
        const formatted = thousandSeparator(calculated);
        return formatted;
      })
    );
  }, [experience]);

  return (
    <div>
      <Paper variant="outlined">
        <Box p={2}>
          <Typography color="textSecondary" gutterBottom>
          {language.infectedExpCalculator['infectedStoneLevelRange']}{' '}
            <Typography
              component="span"
              color="textPrimary"
            >{`${value[0]} - ${value[1]}`}</Typography>
          </Typography>
          <Slider
            marks
            min={0}
            max={30}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            valueLabelDisplay="auto"
          />
        </Box>
      </Paper>
      <Paper variant="outlined" style={{ marginTop: '1.5rem' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left">{language.infectedExpCalculator['levels']}</TableCell>
              <TableCell align="right">{language.infectedExpCalculator['fragments']}</TableCell>
              <TableCell align="right">{language.infectedExpCalculator['reqXP']}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{`${value[0]} - ${value[1]}`}</TableCell>
              <TableCell align="right">{fragments[0]}</TableCell>
              <TableCell align="right">{experience[0]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{`0 - ${value[0]}`}</TableCell>
              <TableCell align="right">{fragments[1]}</TableCell>
              <TableCell align="right">{experience[1]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{`${value[1]} - 30`}</TableCell>
              <TableCell align="right">{fragments[2]}</TableCell>
              <TableCell align="right">{experience[2]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography style={{ padding: '1em' }}>
        {language.infectedExpCalculator['info']}
        </Typography>
      </Paper>
      <Paper variant="outlined" style={{ marginTop: '1.5rem' }}>
        <Box p={2}>
          <List
            subheader={
              <ListSubheader disableGutters>
                {language.infectedExpCalculator['listItem']}
              </ListSubheader>
            }
          >
            {/* <ListItem> */}
            <ListItemText
              primary={language.infectedExpCalculator['listItemPrimary']}
              secondary={language.infectedExpCalculator['listItemSecondary']}
            />
            <ListItemText
              primary={language.infectedExpCalculator['listItemPrimary2']}
              secondary={language.infectedExpCalculator['listItemSecondary2']}
            />
            {/* </ListItem> */}
          </List>
        </Box>
      </Paper>
    </div>
  );
};

export default InfectedExperienceCalculator;
