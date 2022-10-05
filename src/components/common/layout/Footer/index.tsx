import React from 'react';
import { navigate } from 'gatsby';

import BorderBottom from 'images/border-top-black.png';
import AtticBoxLogo from 'vectors/logo.svg';
import FeatherSvg from 'vectors/feather.svg';

import {
  BorderTop, FooterContainer, InnerContainer, AtticBox, FeatherContainer, LinkContainer, Link,
} from './styled';

export const Footer: React.FC = () => {
  return (
    <>
      <BorderTop src={BorderBottom} alt="border bottom" />
      <FooterContainer>
        <InnerContainer>
          <AtticBox>
            <AtticBoxLogo width="33" />
            Attic Box Games
          </AtticBox>
          <FeatherContainer>
            <FeatherSvg width="76" height="5" />
          </FeatherContainer>
          <LinkContainer>
            <Link onClick={() => navigate('/discord')}>
              Discord
            </Link>
            <Link
              href="https://gamejolt.com/games/Seek/30152"
              target="_blank"
              rel="noreferrer"
            >
              Gamejolt
            </Link>
            <Link
              href="https://atticboxgames.itch.io/seek"
              target="_blank"
              rel="noreferrer"
            >
              Itch.io
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCNIl8NiI60jW2q1s2EogeUA"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </Link>
            <Link
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=302305817"
              target="_blank"
              rel="noreferrer"
            >
              Steam
            </Link>
            <Link
              href="https://www.facebook.com/AtticBoxGames"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </Link>
            <Link
              href="https://www.indiedb.com/games/seek"
              target="_blank"
              rel="noreferrer"
            >
              IndieDB
            </Link>
          </LinkContainer>
          <Link href="mailto:contact@atticboxgames.com" underline>
            contact@atticboxgames.com
          </Link>
        </InnerContainer>
      </FooterContainer>
    </>
  );
};
