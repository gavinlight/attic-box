import * as i from 'types';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { useMobile } from 'hooks';
import { Button } from 'common/interaction';

export const DemoButton: React.FC<i.ButtonProps> = ({
  children,
  ...buttonProps
}) => {
  const [isMobile] = useMobile();
  const data = useStaticQuery<GatsbyTypes.DemoButtonQuery>(query);

  if (!data.contentfulSettings?.demoUrl || !data.contentfulSettings?.gamejoltUrl) {
    return null;
  }

  return (
    <Button
      bold
      as="a"
      target="_blank"
      href={isMobile
        ? data.contentfulSettings.gamejoltUrl
        : data.contentfulSettings.demoUrl
      }
      {...buttonProps}
    >
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
