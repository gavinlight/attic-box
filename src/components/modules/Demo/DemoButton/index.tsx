import * as i from 'types';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Button } from 'common/interaction';

export const DemoButton: React.FC<i.ButtonProps> = ({ children, ...buttonProps }) => {
  const data = useStaticQuery<GatsbyTypes.DemoButtonQuery>(query);

  if (!data.contentfulSettings?.demoUrl) {
    return null;
  }

  return (
    <Button bold as="a" target="_blank" href={data.contentfulSettings?.demoUrl} {...buttonProps}>
      {children}
    </Button>
  );
};

export const query = graphql`
  query DemoButton {
    contentfulSettings {
      gamejoltUrl
      demoUrl
    }
  }
`;
