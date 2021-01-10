import React from 'react';
// import './App.css';
import { LanguageProvider } from './provider/Language';
import ThemeProvider from './provider/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Nav from './components/Nav';


const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CssBaseline />
        {/* <Header /> */}
        <Nav/>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
