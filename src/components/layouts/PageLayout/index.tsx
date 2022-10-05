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

  const socialData = {
    contactEmail: settings?.contactEmail,
    gamejoltUrl: settings?.gamejoltUrl,
    itchUrl: settings?.itchUrl,
    youtubeUrl: settings?.youtubeUrl,
    steamUrl: settings?.steamUrl,
    facebookUrl: settings?.facebookUrl,
    indieDbUrl: settings?.indieDbUrl,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        {...{ isSubPage, demoButton }}
      />
      <main>
        {children}
      </main>
      <Footer {...socialData} />
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
