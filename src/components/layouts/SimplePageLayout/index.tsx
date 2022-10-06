import React from 'react';
import { ThemeProvider } from 'styled-components';

import AtticBoxLogo from 'vectors/logo.svg';
import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Meta } from 'common/general';
import { Heading } from 'common/typography';

import { SimplePage } from './styled';

export const SimplePageLayout: React.FC<SimplePageLayoutProps> = ({
  title,
  pathname,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta title={title} pathname={pathname} />
      <SimplePage>
        <AtticBoxLogo width="150" />
        <Heading
          textAlign="center"
          as="h1"
        >
          {title}
        </Heading>
        {children}
      </SimplePage>
    </ThemeProvider>
  );
};

type SimplePageLayoutProps = {
  title: string;
  pathname: string;
};
