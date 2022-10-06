import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Header, Footer } from 'common/layout';
import { Meta } from 'common/general';

export const PageLayout: React.FC<PageProps> = ({
  title, pathname, isSubPage, children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta title={title} pathname={pathname} />
      <Header isSubPage={isSubPage} />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

type PageProps = {
  title?: string;
  pathname: string;
  isSubPage?: boolean;
};
