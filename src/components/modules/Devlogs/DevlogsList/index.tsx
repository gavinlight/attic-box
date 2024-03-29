import * as React from 'react';
import { graphql } from 'gatsby';

import BorderImage from 'images/image-border.png';
import { Button } from 'common/interaction';
import { Text } from 'common/typography';

import {
  DevlogsListContainer,
  DevlogContainer,
  Image,
  Thumbnail,
  Border,
  Content,
  GridBreak,
} from './styled';

export const DevlogsList: React.FC<DevlogsListProps> = ({ devlogs }) => {
  return (
    <DevlogsListContainer>
      {devlogs.map((devlog, index) => {
        const isHeroDevlog = index === 0;

        return (
          <React.Fragment key={devlog.id}>
            <DevlogContainer variant={isHeroDevlog ? 'large' : 'regular'}>
              <Image>
                {devlog.thumbnail?.gatsbyImageData && (
                  <>
                    <Thumbnail
                      image={devlog.thumbnail.gatsbyImageData}
                      alt={devlog.thumbnail.title || devlog.title || 'Dev log'}
                    />
                    <Border src={BorderImage} alt="Border overlay" />
                  </>
                )}
              </Image>
              <Content>
                {devlog?.title && (
                  <Text size={26} $style="italic" margin="0 0 8px">
                    {devlog.title}
                  </Text>
                )}
                {devlog.description?.description && (
                  <Text margin="0 0 16px">{devlog.description.description}</Text>
                )}
                {devlog.file?.url &&
                  (isHeroDevlog ? (
                    <Button small as="a" target="_blank" rel="noreferrer" href={devlog.file.url}>
                      Read more
                    </Button>
                  ) : (
                    <a target="_blank" rel="noreferrer" href={devlog.file.url}>
                      Read more
                    </a>
                  ))}
              </Content>
            </DevlogContainer>
            {isHeroDevlog && <GridBreak />}
          </React.Fragment>
        );
      })}
    </DevlogsListContainer>
  );
};

export const query = graphql`
  fragment Devlog on ContentfulDevlog {
    id
    title
    description {
      description
    }
    file {
      url
      title
    }
    hero {
      title
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
    thumbnail {
      title
      gatsbyImageData(width: 400, quality: 90)
    }
  }
`;

type DevlogsListProps = {
  devlogs: GatsbyTypes.DevlogFragment[];
};
