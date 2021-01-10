import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#1D1F29',
      paper: '#222431',
    },
    primary: {
      contrastText: '#fff',
      dark: '#303f9f',
      light: '#7986cb',
      main: '#71C3FF',
    },
  },
});

console.log(theme);

const ThemeProviderCustom = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderCustom;
