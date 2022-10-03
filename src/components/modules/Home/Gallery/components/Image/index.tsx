import React from 'react';

import { slugify } from 'services';
import { QuoteImage, GatsbyModal } from 'common/layout';

import { ImageLink, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({
  id, thumbnail, fullscreen, showFullImage = false, openGalleryItem, name = 'Seek',
}) => {
  if (!thumbnail?.url) return null;

  return (
    <>
      <ImageLink to={`/gallery/${slugify(name)}`}>
        <QuoteImage
          src={thumbnail?.url}
          text={name || ''}
          big
        />
      </ImageLink>
      {id === openGalleryItem && (
        <GatsbyModal
          mainUrl="/"
          variant="default"
        >
          <ModalImage
            image={fullscreen?.url || thumbnail?.url}
            showFullImage={showFullImage}
          />
          <ModalText>{name}</ModalText>
        </GatsbyModal>
      )}
    </>
  );
};

type ImageProps = GatsbyTypes.GalleryItemFragment & {
  openGalleryItem?: string;
};
