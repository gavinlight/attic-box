import React from 'react';

import { useDispatch } from 'hooks';
import { getContent } from 'ducks/content';
import { Page } from 'common/layout';
import { Header, World, Gallery, Team } from 'modules/Home';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <Page>
      <Header />
      <World />
      <Gallery />
      <Team />
    </Page>
  );
};

export default Home;
