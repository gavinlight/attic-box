import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.crimson};
    font-weight: 400;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
  }

  p {
    margin: 0;
  }

  #app, main {
    overflow-x: hidden;
  }

  #modal {
    position: relative;
    z-index: 100;
  }
`;

export default globalStyle;
