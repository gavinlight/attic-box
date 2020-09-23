import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from 'store';
import theme from 'styles/theme';

import App from './App';

const Root: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
