import React from 'react';

import { Heading } from 'common/typography';
import { Button } from 'common/interaction';
import Trailer from 'images/media/trailer.mp4';
import SeekLogo from 'images/logo-seek.png';
import FeatherSvg from 'vectors/feather.svg';
import { scrollTo } from 'services';

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
        <Button
          bold
          as="a"
          href="https://w3g3a5v6.ssl.hwcdn.net/upload2/game/589181/2527757?GoogleAccessId=uploader@moonscript2.iam.gserviceaccount.com&Expires=1596653023&Signature=iAapDjp9aKm3vyvkfehbr8GT1ItQYeZuIpzd0igJPibIzemGw6Y915QNj9wHdVgrOpaQhSMiawf2Z6h3icrD7e10yrCLuXxSTNLu1tvDWNlqGvqLB%2FxG2JYOXsEdNXg5JgxUszR8OxPK50QFgdPc%2Fx3gf05gwJJdTPVWTER2SKsbNbontUEZtJ%2F8V28%2FLtK8fvJZxghU2LWsKZTIYxgV%2BK0k07iTG3GlULJKQOdxEe50WMa0ywX92GQoodQptxrwuf0PTVZrJDCCpQbnkH9u7kvZNYLpe2IfL1J%2FqDhSakAAxpnpn7yzaD1gXRHfvkLbP%2BgYYd51%2B%2FSbG8BNFxpLvg==&hwexp=1596653283&hwsig=be4750c2dafbd56464e6f9f36caa497a"
          target="_blank"
        >
          PLAY DEMO
        </Button>
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
