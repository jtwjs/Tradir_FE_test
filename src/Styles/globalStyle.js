import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
  
  body {
    width: 100%;
    min-height: 100%;
	  font-family: 'Roboto', sans-serif;
    line-height: 1.43;
    background-color: ${({ theme }) => theme.color.bg};
  }
  
  a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
  }
  
  input,textarea {
    outline: none;
    border: 0;
    background-color: transparent;
  }
  
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  ol, ul, li {
    list-style: none;
  }
  
  img {
    width: 100%;
  }
  
  [tabindex]:focus-visible,
  a:focus-visible,
  label:focus-visible,
  button:focus-visible{
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.primary};
  }
  
  .a11y {
    overflow: hidden;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;

export default GlobalStyle;
