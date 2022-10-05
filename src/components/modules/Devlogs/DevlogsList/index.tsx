import * as React from 'react';
import { graphql } from 'gatsby';

import BorderImage from 'images/image-border.png';
import { Text } from 'common/typography';
import { Button } from 'common/interaction';

import {
  DevlogsListContainer, DevlogContainer, Image, Thumbnail, Border, Content, GridBreak,
} from './styled';

export const DevlogsList: React.FC<DevlogsListProps> = ({
  devlogs,
}) => {
  return (
    <DevlogsListContainer>
      {devlogs.map((devlog, index) => (
        <React.Fragment key={index}>
          <DevlogContainer
            variant={index === 0
              ? 'large'
              : 'regular'
            }
          >
            <Image>
              {devlog?.thumbnail && (
                <>
                  <Thumbnail
                    src={devlog.thumbnail.url}
                    alt={devlog.thumbnail.title}
                  />
                  <Border
                    src={BorderImage}
                    alt="Border overlay"
                  />
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
                <Text margin="0 0 16px">
                  {devlog.description.description}
                </Text>
              )}
              {devlog.file?.url && (
                index === 0 ? (
                  <Button small as="a" target="_blank" rel="noreferrer" href={devlog.file.url}>
                    Read more
                  </Button>
                ) : (
                  <a target="_blank" rel="noreferrer" href={devlog.file.url}>
                    Read more
                  </a>
                )
              )}
            </Content>
          </DevlogContainer>
          {index === 0 && (
            <GridBreak />
          )}
        </React.Fragment>
      ))}
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
    number
    file {
      url
      title
    }
    hero {
      url
      title
    }
    thumbnail {
      url
      title
    }
  }
`;

type DevlogsListProps = {
  devlogs: GatsbyTypes.DevlogFragment[];
};
