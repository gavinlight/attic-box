import React from 'react';

import { Header, Footer } from 'common/layout';

export const Page: React.FC<PageProps> = ({
  isSubPage, children,
}) => (
  <>
    <Header {...{ isSubPage }} />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

type PageProps = {
  isSubPage?: boolean;
};
