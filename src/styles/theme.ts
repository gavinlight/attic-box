import 'styled-components';

const theme = {
  colors: {
    prime: '#e7ff00',
    black: Object.assign('#000000', {
      opacity: 'rgba(22, 22, 22, 0.8);',
    }),
    white: Object.assign('#ffffff', {
      off: '#D8DEE4',
      grey: '#EAEAEA',
    }),
    gray: Object.assign('#8e8e8e', {
      dark: '#1B1B1B',
      light: '#EEEEEE',
    }),
    red: '#96281B',
  },
  fonts: {
    crimson: '"Crimson Text", serif',
  },
} as const;

export default theme;
