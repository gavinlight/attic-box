import React from 'react';

import { QuoteImage, Modal } from 'common/layout';

import { ImageButton, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({ url, fullscreenUrl, text }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <ImageButton role="button" onClick={() => setModalOpen(true)}>
        <QuoteImage
          src={url}
          text={text || ''}
          big
        />
      </ImageButton>
      {modalOpen && (
        <Modal open={modalOpen} closeModal={() => setModalOpen(false)}>
          <ModalImage image={fullscreenUrl || url} />
          <ModalText>{text}</ModalText>
        </Modal>
      )}
    </>
  );
};

type ImageProps = {
  url: string;
  fullscreenUrl?: string;
  text?: string;
};
