import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    overflow-x: hidden;
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
    overflow-x: hidden;
  }

  p {
    margin: 0;
  }
`;

export default globalStyle;
