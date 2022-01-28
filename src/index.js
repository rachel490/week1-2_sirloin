import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './styles';
import GlobalStyle from './GlobalStyle';
import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root'),
);
