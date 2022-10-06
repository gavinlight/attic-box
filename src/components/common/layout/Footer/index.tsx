import React from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

import BorderBottom from 'images/border-top-black.png';
import AtticBoxLogo from 'vectors/logo.svg';
import FeatherSvg from 'vectors/feather.svg';

import {
  BorderTop, FooterContainer, InnerContainer, AtticBox, FeatherContainer, LinkContainer, Link,
} from './styled';

export const Footer: React.FC = () => {
  const { contentfulSettings: socialLinks } = useStaticQuery<GatsbyTypes.SocialLinksQuery>(query);

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
            {socialLinks?.gamejoltUrl && (
              <Link
                href={socialLinks.gamejoltUrl}
                target="_blank"
                rel="noreferrer"
              >
                Gamejolt
              </Link>
            )}
            {socialLinks?.itchUrl && (
              <Link
                href={socialLinks.itchUrl}
                target="_blank"
                rel="noreferrer"
              >
                Itch.io
              </Link>
            )}
            {socialLinks?.youtubeUrl && (
              <Link
                href={socialLinks.youtubeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </Link>
            )}
            {socialLinks?.steamUrl && (
              <Link
                href={socialLinks.steamUrl}
                target="_blank"
                rel="noreferrer"
              >
                Steam
              </Link>
            )}
            {socialLinks?.facebookUrl && (
              <Link
                href={socialLinks.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </Link>
            )}
            {socialLinks?.indieDbUrl && (
              <Link
                href={socialLinks.indieDbUrl}
                target="_blank"
                rel="noreferrer"
              >
                IndieDB
              </Link>
            )}
          </LinkContainer>
          {socialLinks?.contactEmail && (
            <Link href={`mailto:${socialLinks.contactEmail}`} underline>
              {socialLinks.contactEmail}
            </Link>
          )}
        </InnerContainer>
      </FooterContainer>
    </>
  );
};

export const query = graphql`
  query SocialLinks {
    contentfulSettings {
      contactEmail
      gamejoltUrl
      itchUrl
      youtubeUrl
      steamUrl
      facebookUrl
      indieDbUrl
    }
  }
`;
