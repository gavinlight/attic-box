import React from 'react';

import { Page } from 'common/layout';
import { Header, UnderTheFold, World, Gallery, Team } from 'modules/Home';

const Home: React.FC = () => (
  <Page>
    <Header />
    <World />
    <Gallery />
    <Team />
  </Page>
);

export default Home;
