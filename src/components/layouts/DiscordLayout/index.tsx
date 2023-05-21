import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import DiscordLogoSvg from 'vectors/discord.svg';
import { Meta } from 'common/general';
import { Text } from 'common/typography';

import { DiscordPage } from './styled';

export const DiscordLayout: React.FC<DiscordLayoutProps> = ({ title, pathname }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta title={title} pathname={pathname} />
      <DiscordPage>
        <DiscordLogoSvg />
        <Text margin="36px 10px 0" $align="center" variant="white" size={24}>
          Redirecting you to our discord...
        </Text>
      </DiscordPage>
    </ThemeProvider>
  );
};

type DiscordLayoutProps = {
  title?: string;
  pathname: string;
};
