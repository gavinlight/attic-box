import React from 'react';
import { navigate } from 'gatsby';

import BorderBottom from 'images/border-top-black.png';
import AtticBoxLogo from 'vectors/logo.svg';
import FeatherSvg from 'vectors/feather.svg';

import {
  BorderTop, FooterContainer, InnerContainer, AtticBox, FeatherContainer, LinkContainer, Link,
} from './styled';

export const Footer: React.FC<FooterProps> = ({
  contactEmail,
  gamejoltUrl,
  itchUrl,
  youtubeUrl,
  steamUrl,
  facebookUrl,
  indieDbUrl,
}) => {
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
            {gamejoltUrl && (
              <Link
                href={gamejoltUrl}
                target="_blank"
                rel="noreferrer"
              >
                Gamejolt
              </Link>
            )}
            {itchUrl && (
              <Link
                href={itchUrl}
                target="_blank"
                rel="noreferrer"
              >
                Itch.io
              </Link>
            )}
            {youtubeUrl && (
              <Link
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </Link>
            )}
            {steamUrl && (
              <Link
                href={steamUrl}
                target="_blank"
                rel="noreferrer"
              >
                Steam
              </Link>
            )}
            {facebookUrl && (
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </Link>
            )}
            {indieDbUrl && (
              <Link
                href={indieDbUrl}
                target="_blank"
                rel="noreferrer"
              >
                IndieDB
              </Link>
            )}
          </LinkContainer>
          {contactEmail && (
            <Link href={`mailto:${contactEmail}`} underline>
              {contactEmail}
            </Link>
          )}
        </InnerContainer>
      </FooterContainer>
    </>
  );
};

type FooterProps = {
  contactEmail?: string;
  gamejoltUrl?: string;
  itchUrl?: string;
  youtubeUrl?: string;
  steamUrl?: string;
  facebookUrl?: string;
  indieDbUrl?: string;
};
