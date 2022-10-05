import React from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Header, Footer } from 'common/layout';

export const PageLayout: React.FC<PageProps> = ({
  settings, isSubPage, children,
}) => {
  const demoButton = {
    demoUrl: settings?.demoUrl,
    gamejoltUrl: settings?.gamejoltUrl,
  };
  console.log('demoButton', demoButton);
  return (
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
};

export const query = graphql`
  fragment Settings on ContentfulSettings {
    contactEmail
    demoUrl
    gamejoltUrl
    itchUrl
    youtubeUrl
    steamUrl
    facebookUrl
    indieDbUrl
  }
`;

type PageProps = {
  isSubPage?: boolean;
  settings?: GatsbyTypes.SettingsFragment;
};
