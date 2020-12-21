import React from 'react';

import { useModal } from 'hooks';
import { QuoteImage, Modal } from 'common/layout';

import { ImageButton, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({
  url, fullscreenUrl, showFullImage = false, text = 'Seek',
}) => {
  const { slug, open, setOpen } = useModal(text);

  return (
    <>
      <ImageButton
        role="button"
        onClick={() => setOpen(true)}
      >
        <QuoteImage
          src={url}
          text={text || ''}
          big
        />
      </ImageButton>
      <Modal
        url={slug}
        open={open}
        setModalOpen={setOpen}
      >
        <ModalImage
          image={fullscreenUrl || url}
          showFullImage={showFullImage}
        />
        <ModalText>{text}</ModalText>
      </Modal>
    </>
  );
};

type ImageProps = {
  url: string;
  fullscreenUrl?: string;
  text?: string;
  showFullImage?: boolean;
};
