import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LanguageSelector from './LanguageSelector';
import Test from './StoneCalculator';
import InfectedExperienceCalculator from './InfectedExperienceCalculator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '1rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Container maxWidth="xs">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CW2 Stone Calculator
            </Typography>
            <LanguageSelector />
          </Toolbar>
          <Tabs centered value={value} onChange={handleChange}>
            <Tab label="Stone" />
            <Tab label="Infected XP" />
          </Tabs>
        </Container>
      </AppBar>
      <Container disableGutters maxWidth="xs">
        <Box p={2}>
          {value === 0 && <Test />}
          {value === 1 && <InfectedExperienceCalculator />}
        </Box>
      </Container>
    </>
  );
};

export default Header;
