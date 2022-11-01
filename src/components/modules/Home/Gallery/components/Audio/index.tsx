import React from 'react';
import styled from 'styled-components';

export const StyledAudio = styled.iframe.attrs({
  frameBorder: 'no',
  scrolling: 'no',
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
})`
  width: 100%;
  height: 100%;
`;

export const Audio: React.FC<GatsbyTypes.GalleryItemFragment> = ({ embeddedMediaUrl }) => (
  <StyledAudio src={embeddedMediaUrl} />
);
