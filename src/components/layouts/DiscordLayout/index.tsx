import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import DiscordLogoSvg from 'vectors/discord.svg';
import { Meta } from 'common/general';

import { DiscordPage, RedirectText } from './styled';

export const DiscordLayout: React.FC<DiscordLayoutProps> = ({
  title,
  pathname,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta title={title} pathname={pathname} />
      <DiscordPage>
        <DiscordLogoSvg />
        <RedirectText>
          Redirecting you to our discord...
        </RedirectText>
      </DiscordPage>
    </ThemeProvider>
  );
};

type DiscordLayoutProps = {
  title?: string;
  pathname: string;
};
