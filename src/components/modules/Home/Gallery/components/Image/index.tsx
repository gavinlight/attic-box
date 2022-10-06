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
  if (!thumbnail) return null;

  return (
    <>
      <ImageLink to={`/gallery/${slugify(name)}`} state={{ modal: true }}>
        <QuoteImage
          image={thumbnail}
          text={name}
          big
        />
      </ImageLink>
      {modalIsOpen && thumbnail.gatsbyImageData && (
        <Modal
          mainUrl="/"
          variant="default"
        >
          <ModalImage
            image={fullscreen?.gatsbyImageData || thumbnail.gatsbyImageData}
            alt={fullscreen?.title || thumbnail.title || name}
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
