import React from 'react';
import './App.scss';
import Routes from './routes'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import globalStyles from './styles';
import Copyright from './components/Copyright'

const theme = createMuiTheme(globalStyles);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes/>
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
