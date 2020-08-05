import React from 'react';

import BorderBottom from 'images/border-top-black.png';
import AtticBoxLogo from 'vectors/logo.svg';
import FeatherSvg from 'vectors/feather.svg';

import {
  BorderTop, FooterContainer, InnerContainer, AtticBox, FeatherContainer, LinkContainer, Link,
} from './styled';

export const Footer: React.FC = () => (
  <>
    <BorderTop src={BorderBottom} alt="border bottom" />
    <FooterContainer>
      <InnerContainer>
        <AtticBox>
          <AtticBoxLogo />
          Attic Box Games
        </AtticBox>
        <FeatherContainer>
          <FeatherSvg width="76" height="5" />
        </FeatherContainer>
        <LinkContainer>
          <Link href="https://gamejolt.com/games/Seek/30152" target="_blank">
            Gamejolt
          </Link>
          <Link href="https://www.youtube.com/channel/UCFGmhqEJt_mo4EjkC4kyjnA" target="_blank">
            Youtube
          </Link>
          <Link href="https://steamcommunity.com/sharedfiles/filedetails/?id=302305817" target="_blank">
            Steam
          </Link>
          <Link href="https://www.facebook.com/AtticBoxGames" target="_blank">
            Facebook
          </Link>
          <Link href="https://www.indiedb.com/games/seek" target="_blank">
            IndieDB
          </Link>
          <Link href="https://twitter.com/AtticBox_Studio" target="_blank">
            Twitter
          </Link>
          <Link href="https://https://atticboxgames.itch.io/seek" target="_blank">
            Itch.io
          </Link>
        </LinkContainer>
        <Link href="mailto:contact@atticboxgames.com" underline>
          contact@atticboxgames.com
        </Link>
      </InnerContainer>
    </FooterContainer>
  </>
);
