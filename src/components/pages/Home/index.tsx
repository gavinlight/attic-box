import React from 'react';

import { Header, World, Gallery, Team, MediaKit } from 'modules/Home';
import { Page } from 'common/layout';

const Home: React.FC = () => {
  return (
    <Page>
      <Header />
      <World />
      <Gallery />
      <Team />
      <MediaKit />
    </Page>
  );
};

export default Home;
