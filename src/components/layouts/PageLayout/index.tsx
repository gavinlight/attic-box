import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Header, Footer } from 'common/layout';

export const PageLayout: React.FC<PageProps> = ({
  demoButton, isSubPage, children,
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header
      {...{ isSubPage }}
      {...demoButton}
    />
    <main>
      {children}
    </main>
    <Footer />
  </ThemeProvider>
);

type PageProps = {
  isSubPage?: boolean;
  demoButton: {
    demoUrl?: string;
    gamejoltUrl?: string;
  };
};
