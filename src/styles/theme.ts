import 'styled-components';

const theme = {
  colors: {
    black: Object.assign('#000000', {
      opacity: 'rgba(22, 22, 22, 0.8);',
    }),
    white: Object.assign('#ffffff', {
      off: '#D8DEE4',
      gray: '#EAEAEA',
    }),
    gray: Object.assign('#8e8e8e', {
      dark: '#1B1B1B',
      light: '#EEEEEE',
      button: '#161616',
      text: '#A5A5A5',
    }),
    red: '#96281B',
  },
  fonts: {
    crimson: '"Crimson Text", serif',
  },
} as const;

export default theme;
