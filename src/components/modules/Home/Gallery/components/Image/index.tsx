import React from 'react';

import { useModal } from 'hooks';
import { QuoteImage, Modal } from 'common/layout';

import { ImageButton, ModalImage, ModalText } from './styled';

export const Image: React.FC<GatsbyTypes.GalleryItemFragment> = ({
  thumbnail, fullscreen, showFullImage = false, name = 'Seek',
}) => {
  const { slug, open, setOpen } = useModal(name);
  if (!thumbnail?.url) return null;

  return (
    <>
      <ImageButton
        role="button"
        onClick={() => setOpen(true)}
      >
        <QuoteImage
          src={thumbnail?.url}
          text={name || ''}
          big
        />
      </ImageButton>
      <Modal
        url={slug}
        open={open}
        setModalOpen={setOpen}
        variant="default"
      >
        <ModalImage
          image={fullscreen?.url || thumbnail?.url}
          showFullImage={showFullImage}
        />
        <ModalText>{name}</ModalText>
      </Modal>
    </>
  );
};
