import React from 'react';

import { Header } from 'common/layout';

export const Page: React.FC = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);
