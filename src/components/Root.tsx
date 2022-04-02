import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import theme from 'styles/theme';

import App from './App';

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);

export default Root;
