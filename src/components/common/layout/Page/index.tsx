import React from 'react';

import { Header, Footer } from 'common/layout';

export const Page: React.FC = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);
