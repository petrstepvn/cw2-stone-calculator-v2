import React from 'react';
// import './App.css';
import { LanguageProvider } from './provider/Language';
import ThemeProvider from './provider/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Header from './components/Header';

import Test from './components/StoneCalculator';
import InfectedExperienceCalculator from './components/InfectedExperienceCalculator';

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CssBaseline />
        <Header />
        {/* <Container maxWidth="xs"> */}
        {/* <Test /> */}
        {/* <InfectedExperienceCalculator /> */}
        {/* </Container> */}
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
