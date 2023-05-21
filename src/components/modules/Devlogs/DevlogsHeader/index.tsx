import * as i from 'types';
import * as React from 'react';

import BorderTopImage from 'images/border-top-black.png';
import FeatherSvg from 'vectors/feather.svg';
import { Heading, Text } from 'common/typography';

import { Header, HeaderBackground, HeaderContainer, BorderTop } from './styled';

export const DevlogsHeader: React.FC<DevlogsHeaderProps> = ({ hero, title, description }) => {
  return (
    <>
      <Header>
        {hero.gatsbyImageData && (
          <HeaderBackground image={hero.gatsbyImageData} alt={hero.title || title || 'Dev log'} />
        )}
        <HeaderContainer>
          {title && (
            <>
              <Heading as="h1">Devlog archive</Heading>
              <FeatherSvg width="76" height="5" />
            </>
          )}
          {description && (
            <Text size={18}>
              Want to keep up with the developments of Seek? Here you'll find all of our dev logs.
            </Text>
          )}
        </HeaderContainer>
      </Header>
      <BorderTop src={BorderTopImage} alt="border top" />
    </>
  );
};

type DevlogsHeaderProps = {
  hero: i.ContentfulImage;
  title?: string;
  description?: string;
};
