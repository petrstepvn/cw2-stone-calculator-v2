import React, { useState, useContext } from 'react';
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
import { LanguageContext } from '../provider/Language';
import StoneOfSynthesis from './StoneOfSynthesis';

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
  const [value, setValue] = useState(2);
  const [language] = useContext(LanguageContext);

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
        </Container>

        <Tabs centered value={value} onChange={handleChange}>
          <Tab label={language.header['stone']} />
          <Tab label={language.header['infectedXP']} />
          <Tab label={language.header['synthesis']} />
        </Tabs>
      </AppBar>
      <Container disableGutters maxWidth="xs">
        <Box p={2}>
          {value === 0 && <Test />}
          {value === 1 && <InfectedExperienceCalculator />}
          {value === 2 && <StoneOfSynthesis />}
        </Box>
      </Container>
    </>
  );
};

export default Header;
