import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    --gray-text:#536162;
    --white: #f4f9f9;
    --shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    --light-shadow: 0px 8px 16px 0px rgba(256, 256, 256, 0.2);
    --top: 5vh;
    --sky: #CAEBF2;
    --watermelon: #FF3B3F;
    --neutral: #EFEFEF;
    --carbon: #A9A9A9;
    --gap-x: 1vw;
    --gap-y: 2vh;
    --border: 1px solid var(--carbon);
    --padding: 25px;
    --items-padding: 15px;
    --radius: 3px;
    --line-height: 50px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, h4, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  a {
    text-decoration: none;
  }
  
  body {
    height: 100vh;
    margin: 0 auto;
    max-width: 100vw;
    overscroll-behavior: none;
    background-color: var(--neutral);
    overflow-x: hidden;
    width: 100%; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
`;
