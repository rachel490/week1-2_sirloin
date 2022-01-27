import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles';
import GlobalStyle from './GlobalStyle';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root'),
);
