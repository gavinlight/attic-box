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
      hover: '#262626',
      border: {
        left: '#131415',
        top: '#0D1010',
        right: '#111112',
        bottom: '#202323',
      },
    }),
    red: Object.assign('#96281B', {
      hover: '#AC2023',
      button: '#8E1E20',
      border: {
        left: '#310F10',
        top: '#52191A',
        right: '#611C1E',
        bottom: '#3F1112',
      },
    }),
    discord: '#7289DA',
  },
  fonts: {
    crimson: '"Crimson Text", serif',
  },
} as const;

export default theme;
