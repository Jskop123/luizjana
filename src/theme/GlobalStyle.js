import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Big Shoulders Stencil Display", cursive;
    background-color: #121;  
  }
`;

export default GlobalStyle;
