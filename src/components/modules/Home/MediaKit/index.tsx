import * as React from 'react';

import BorderTopImage from 'images/border-bottom-grey.png';
import AtticBoxLogo from 'vectors/logo.svg';
import { Container } from 'common/layout';
import { Heading, Text } from 'common/typography';

import { MediaKitContainer, BorderContainer, BorderTop } from './styled';

export const MediaKit: React.FC = () => {
  return (
    <MediaKitContainer id="media-kit">
      <BorderContainer>
        <BorderTop src={BorderTopImage} alt="border top" />
      </BorderContainer>
      <Container align="center">
        <AtticBoxLogo width="88" />
        <Heading as="h2" clickAble>
          <a href="https://www.atticboxgames.com/abg_seek_presskit.zip">
            Download presskit
          </a>
        </Heading>
        <Text>
          Looking to write/post about Attic Box Games or Seek?
        </Text>
        <Text>
          Our presskit contains both the Attic Box Games and Seek logos in all shapes and sizes.
        </Text>
      </Container>
    </MediaKitContainer>
  );
};
