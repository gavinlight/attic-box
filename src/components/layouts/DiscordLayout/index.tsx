import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import DiscordLogoSvg from 'vectors/discord.svg';

import { DiscordPage, RedirectText } from './styled';

export const DiscordLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DiscordPage>
        <DiscordLogoSvg />
        <RedirectText>
          Redirecting you to our discord...
        </RedirectText>
      </DiscordPage>
    </ThemeProvider>
  );
};
