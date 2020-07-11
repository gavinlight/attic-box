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
          <Link href="" target="_blank">
            Gamejolt
          </Link>
          <Link href="" target="_blank">
            Facebook
          </Link>
          <Link href="" target="_blank">
            Steam
          </Link>
          <Link href="" target="_blank">
            Steam
          </Link>
        </LinkContainer>
        <Link href="mailto:contact@atticboxgames.com">
          contact@atticboxgames.com
        </Link>
      </InnerContainer>
    </FooterContainer>
  </>
);
