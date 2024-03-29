import React from 'react';
import { Link } from 'gatsby';

import { Text } from 'common/typography';
import { SimplePageLayout } from 'layouts';

const NotFound: React.FC = () => {
  return (
    <SimplePageLayout title="404 - Not found" pathname="/404">
      <Text size={18}>
        Click <Link to="/">here</Link> to go back to the homepage.
      </Text>
    </SimplePageLayout>
  );
};

export default NotFound;
