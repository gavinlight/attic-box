import * as i from 'types';
import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { ImageContainer, Text } from './styled';

export const QuoteImage: React.FC<QuoteImageProps> = ({
  src, image, text, width, big,
}) => (
  <ImageContainer width={width}>
    {src ? (
      <img src={src} alt={text} />
    ) : image?.gatsbyImageData && (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.title || text}
      />
    )}
    <Text big={big}>{text}</Text>
  </ImageContainer>
);

type BaseQuoteImageProps = {
  text: string;
  width?: string;
  big?: boolean;
};

type QuoteImageProps = BaseQuoteImageProps & (
  {
    src: string;
    image?: undefined;
  } | {
    src?: undefined;
    image: i.ContentfulImage;
  }
);
