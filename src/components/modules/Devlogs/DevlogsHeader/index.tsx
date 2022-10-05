import * as React from 'react';

import FeatherSvg from 'vectors/feather.svg';
import BorderTopImage from 'images/border-top-black.png';
import { Container } from 'common/layout';
import { Heading, Text } from 'common/typography';

import { Header, BorderTop } from './styled';

export const DevlogsHeader: React.FC<DevlogsHeaderProps> = ({
  heroUrl,
  title,
  description,
}) => {
  return (
    <>
      <Header background={heroUrl}>
        <Container>
          {title && (
            <>
              <Heading as="h1">
                Devlog archive
              </Heading>
              <FeatherSvg width="76" height="5" />
            </>
          )}
          {description && (
            <Text size={18}>
              Want to keep up with the developments of Seek? Here you'll find all of our dev logs.
            </Text>
          )}
        </Container>
      </Header>
      <BorderTop src={BorderTopImage} alt="border top" />
    </>
  );
};

type DevlogsHeaderProps = {
  heroUrl: string;
  title?: string;
  description?: string;
};
