import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Slider,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ListItem,
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
            Infected Stone Level range:{' '}
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
              <TableCell align="left">LEVELS</TableCell>
              <TableCell align="right">FRAGMENTS</TableCell>
              <TableCell align="right">REQ XP</TableCell>
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
          Fragment Portal has 2000 monsters on average. <br />1 monster = 1
          infected stone XP.
        </Typography>
      </Paper>
      <Paper variant="outlined" style={{ marginTop: '1.5rem' }}>
        <Box p={2}>
          <List
            subheader={
              <ListSubheader disableGutters>
                Experience gain can be increased through:
              </ListSubheader>
            }
          >
            {/* <ListItem> */}
            <ListItemText
              primary="Prophecy Infected Knowledge I · II · III"
              secondary="The next 5 000 · 10 000 · 20 000 monsters you kill will reward you with twice the amount of Infected Stone experience."
            />
            <ListItemText
              primary="Celia Event - every Sunday"
              secondary="Infected Stones receive 100% more experience."
            />
            {/* </ListItem> */}
          </List>
        </Box>
      </Paper>
    </div>
  );
};

export default InfectedExperienceCalculator;
