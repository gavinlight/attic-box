import React from 'react';

import { Page } from 'common/layout';
import { Header, UnderTheFold, World } from 'modules/Home';

const Home: React.FC = () => (
  <Page>
    <Header />
    <World />
  </Page>
);

export default Home;
