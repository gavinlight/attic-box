import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BorderTopImage from 'images/border-bottom-grey.png';
import AtticBoxLogo from 'vectors/logo.svg';
import { Container } from 'common/layout';
import { Heading, Text } from 'common/typography';

import { MediaKitContainer, BorderContainer, BorderTop } from './styled';

export const MediaKit: React.FC = () => {
  const { contentfulSettings } = useStaticQuery<GatsbyTypes.PressKitQuery>(query);

  return (
    <MediaKitContainer id="media-kit">
      <BorderContainer>
        <BorderTop src={BorderTopImage} alt="border top" />
      </BorderContainer>
      <Container align="center">
        <AtticBoxLogo width="88" />
        {contentfulSettings?.pressKit?.url && (
          <Heading as="h2" clickAble>
            <a href={contentfulSettings.pressKit.url}>
              Download presskit
            </a>
          </Heading>
        )}
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

const query = graphql`
  query PressKit {
    contentfulSettings {
      pressKit {
        url
      }
    }
  }
`;
