import React from 'react';

import { QuoteImage } from 'common/layout';

export const Image: React.FC<ImageProps> = ({ url, text }) => {
  const [fullscreen, setFullscreen] = React.useState(false);

  return (
    <QuoteImage
      src={url}
      text={text || ''}
      big
    />
  );
};

type ImageProps = {
  url: string;
  text?: string;
};
