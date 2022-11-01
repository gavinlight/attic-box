import React from 'react';

import Trailer from 'images/media/trailer.mp4';
import TrailerMobile from 'images/media/trailer-mobile.mp4';
import SeekLogo from 'images/logo-seek.png';
import FeatherSvg from 'vectors/feather.svg';

import { scrollTo } from 'services';
import { useMobile } from 'hooks';
import { Heading } from 'common/typography';
import { Button } from 'common/interaction';

import { BackgroundContainer, BackgroundVideo, Content, IntroText, ButtonContainer } from './styled';

export const Header: React.FC = () => {
  const [isMobile, determined] = useMobile();

  return (
    <BackgroundContainer id="header">
      <BackgroundVideo autoPlay loop playsInline muted>
        {determined && (
          <source
            type="video/mp4"
            src={isMobile ? TrailerMobile : Trailer}
          />
        )}
      </BackgroundVideo>
      <Content>
        <IntroText>
          <Heading as="h2">
            Attic box games presents
          </Heading>
          <FeatherSvg width="76" height="5" />
        </IntroText>
        <img src={SeekLogo} alt="Logo seek" />
        <ButtonContainer>
          <Button
            bold
            variant="secondary"
            onClick={() => scrollTo('#world', 100)}
          >
            READ MORE
          </Button>
        </ButtonContainer>
      </Content>
    </BackgroundContainer>
  );
};
