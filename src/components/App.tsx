import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import GlobalStyle from 'styles';

const Home = lazy(() => import('pages/Home'));
const Discord = lazy(() => import('pages/Discord'));
const Devlogs = lazy(() => import('pages/Devlogs'));

const isProduction = window.location.host !== 'localhost:3000';
const App: React.FC<RouteComponentProps> = () => (
  <>
    <GlobalStyle />
    {isProduction && (
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177631371-1" />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-177631371-1');
          `}
        </script>
      </Helmet>
    )}
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
