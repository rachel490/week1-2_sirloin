import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }

  button {
    background-color: transparent;
    border: none;
  }

  ul, li {
    padding: 0;
    list-style: none;
  }

  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
