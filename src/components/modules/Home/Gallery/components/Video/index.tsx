import React from 'react';
import styled from 'styled-components';

export const StyledVideo = styled.iframe.attrs({
  frameBorder: 0,
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
})`
  height: 100%;
  width: 100%;
`;

export const Video: React.FC<GatsbyTypes.GalleryItemFragment> = ({ embeddedMediaUrl }) => (
  <StyledVideo src={embeddedMediaUrl} />
);
