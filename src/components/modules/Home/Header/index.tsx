import React from 'react';

import Trailer from 'images/media/trailer.mp4';
import SeekLogo from 'images/logo-seek.png';
import FeatherSvg from 'vectors/feather.svg';

import { scrollTo } from 'services';
import { Heading } from 'common/typography';
import { Button } from 'common/interaction';
import { DemoButton } from 'modules/Demo';

import { BackgroundContainer, BackgroundVideo, Content, IntroText, ButtonContainer } from './styled';

export const Header: React.FC = () => (
  <BackgroundContainer id="header">
    <BackgroundVideo autoPlay loop playsInline muted>
      <source src={Trailer} type="video/mp4" />
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
        <DemoButton>
          PLAY DEMO
        </DemoButton>
        <Button
          variant="secondary"
          onClick={() => scrollTo('#world', 100)}
        >
          READ MORE
        </Button>
      </ButtonContainer>
    </Content>
  </BackgroundContainer>
);
