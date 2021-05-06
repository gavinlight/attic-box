import React from 'react';
import { useHistory } from 'react-router-dom';

import BorderBottom from 'images/border-top-black.png';
import AtticBoxLogo from 'vectors/logo.svg';
import FeatherSvg from 'vectors/feather.svg';

import {
  BorderTop, FooterContainer, InnerContainer, AtticBox, FeatherContainer, LinkContainer, Link,
} from './styled';

export const Footer: React.FC = () => {
  const history = useHistory();

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
            <Link onClick={() => history.push('/discord')}>
              Discord
            </Link>
            <Link href="https://gamejolt.com/games/Seek/30152" target="_blank">
              Gamejolt
            </Link>
            <Link href="https://atticboxgames.itch.io/seek" target="_blank">
              Itch.io
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
          </LinkContainer>
          <Link href="mailto:contact@atticboxgames.com" underline>
            contact@atticboxgames.com
          </Link>
        </InnerContainer>
      </FooterContainer>
    </>
  );
};
