import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #a3a3a3;
    color: #242424;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
