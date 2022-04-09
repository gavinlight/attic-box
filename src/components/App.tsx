import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import GlobalStyle from 'styles';

const Home = lazy(() => import('pages/Home'));
const Discord = lazy(() => import('pages/Discord'));
const Devlogs = lazy(() => import('pages/Devlogs'));

const App: React.FC<RouteComponentProps> = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={null}>
      <Switch>
        <Route path="/discord" component={Discord} />
        <Route path="/devlogs" component={Devlogs} />
        <Route path="/:contentSlug?" component={Home} />
      </Switch>
    </Suspense>
  </>
);

export default withRouter(App);
