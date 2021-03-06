import React, { Fragment } from 'react';

import FeatherSvg from 'vectors/feather.svg';
import BorderTopImage from 'images/border-top-black.png';
import BorderImage from 'images/image-border.png';
import { useSelector, useDispatch } from 'hooks';
import { getDevlogs } from 'ducks/devlogs';
import { Container, Page } from 'common/layout';
import { Heading, Text } from 'common/typography';

import { Button } from 'types';
import {
  Header, BorderTop, Devlogs, DevlogContainer, Image, Thumbnail, Border, Content, GridBreak,
} from './styled';

const Devlog: React.FC = () => {
  const dispatch = useDispatch();
  const devlogArchive = useSelector((state) => state.devlogs.data);

  React.useEffect(() => {
    dispatch(getDevlogs());
  }, []);

  const devlogs = devlogArchive && Object.values(devlogArchive).sort((a, b) => (
    (b?.number || 0) - (a?.number || 0)
  ));
  const mainDevlog = devlogs?.[0];

  return (
    <Page isSubPage>
      {mainDevlog && (
        <Header background={mainDevlog?.hero}>
          <Container>
            <Heading as="h1">
              Devlog archive
            </Heading>
            <FeatherSvg width="76" height="5" />
            <Text size={18}>
              Want to keep up with the developments of Seek? Here you’ll find all of our dev logs.
            </Text>
          </Container>
        </Header>
      )}
      <BorderTop src={BorderTopImage} alt="border top" />
      <Devlogs>
        {devlogs?.map((devlog, index) => (
          <Fragment key={index}>
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
                      src={devlog.thumbnail}
                      alt={`Thumbnail - Devlog ${devlog?.time || ''}`}
                    />
                    <Border
                      src={BorderImage}
                      alt="Border overlay"
                    />
                  </>
                )}
                {devlog?.number && (
                  <Text size={40}>
                    #{devlog.number}
                  </Text>
                )}
              </Image>
              <Content>
                {devlog?.time && (
                  <Text size={26} $style="italic" margin="0 0 8px">
                    {devlog.time}
                  </Text>
                )}
                {devlog?.introduction && (
                  <Text size={14} margin="0 0 16px">
                    {devlog.introduction}
                  </Text>
                )}
                {devlog?.link && (
                  index === 0 ? (
                    <Button small as="a" target="_blank" rel="noreferrer" href={devlog.link}>
                      Read more
                    </Button>
                  ) : (
                    <a target="_blank" rel="noreferrer" href={devlog.link}>
                      Read more
                    </a>
                  )
                )}
              </Content>
            </DevlogContainer>
            {index === 0 && (
              <GridBreak />
            )}
          </Fragment>
        ))}
      </Devlogs>
    </Page>
  );
};

export default Devlog;
