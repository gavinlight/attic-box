import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import GlobalStyle from 'styles';

const Home = lazy(() => import('pages/Home'));

const App: React.FC<RouteComponentProps> = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Suspense>
  </>
);

export default withRouter(App);
