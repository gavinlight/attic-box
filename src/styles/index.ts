import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap');

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

  #modal {
    position: relative;
    z-index: 100;
  }
`;

export default globalStyle;
