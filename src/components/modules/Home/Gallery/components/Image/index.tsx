import React from 'react';

import { slugify } from 'services';
import { QuoteImage, Modal } from 'common/layout';

import { ImageLink, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({
  thumbnail,
  fullscreen,
  showFullImage = false,
  modalIsOpen = false,
  name = 'Seek',
}) => {
  if (!thumbnail?.url) return null;

  return (
    <>
      <ImageLink to={`/gallery/${slugify(name)}`} state={{ modal: true }}>
        <QuoteImage
          src={thumbnail?.url}
          text={name || ''}
          big
        />
      </ImageLink>
      {modalIsOpen && (
        <Modal
          mainUrl="/"
          variant="default"
        >
          <ModalImage
            image={fullscreen?.url || thumbnail?.url}
            showFullImage={showFullImage}
          />
          <ModalText>{name}</ModalText>
        </Modal>
      )}
    </>
  );
};

type ImageProps = GatsbyTypes.GalleryItemFragment & {
  modalIsOpen: boolean;
};
