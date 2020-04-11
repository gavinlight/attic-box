import React from 'react';

import { Heading } from 'common/typography';
import { Button } from 'common/interaction';
import Trailer from 'media/trailer.mp4';

import { BackgroundContainer, BackgroundVideo, Content, Tagline, ButtonContainer } from './styled';

export const Header: React.FC = () => (
  <BackgroundContainer>
    <BackgroundVideo autoPlay loop playsInline muted>
      <source src={Trailer} type="video/mp4" />
    </BackgroundVideo>
    <Content>
      <Heading>Seek</Heading>
      <Tagline>Light through darkness</Tagline>
      <ButtonContainer>
        <Button bold>PLAY DEMO</Button>
        <Button variant="secondary">READ MORE</Button>
      </ButtonContainer>
    </Content>
  </BackgroundContainer>
);
