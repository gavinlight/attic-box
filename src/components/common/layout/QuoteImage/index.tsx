import * as React from 'react';

import { ImageContainer, Text } from './styled';

export const QuoteImage: React.FC<QuoteImageProps> = ({ src, text, width }) => (
  <ImageContainer width={width}>
    <img src={src} alt={text} />
    <Text>{text}</Text>
  </ImageContainer>
);

type QuoteImageProps = {
  src: string;
  text: string;
  width?: string;
};
