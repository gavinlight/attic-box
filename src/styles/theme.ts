import 'styled-components';

const theme = {
  colors: {
    prime: '#e7ff00',
    black: Object.assign('#000000', {
      opacity: 'rgba(22, 22, 22, 0.8);',
    }),
    white: '#ffffff',
    gray: '#8e8e8e',
    red: '#D14B4B',
  },
  fonts: {
    crimson: '"Crimson Text", serif',
  },
} as const;

export default theme;
