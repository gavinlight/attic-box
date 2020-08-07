import React from 'react';

import { QuoteImage, Modal } from 'common/layout';

import { ImageButton, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({ url, fullscreenUrl, text = 'image' }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const onModalChange = (open: boolean) => () => setModalOpen(open);

  return (
    <>
      <ImageButton role="button" onClick={onModalChange(true)}>
        <QuoteImage
          src={url}
          text={text || ''}
          big
        />
      </ImageButton>
      <Modal
        open={modalOpen}
        url={text.toLowerCase().replace(/ /g, '-').replace(':', '')}
        closeModal={onModalChange(false)}
      >
        <ModalImage image={fullscreenUrl || url} />
        <ModalText>{text}</ModalText>
      </Modal>
    </>
  );
};

type ImageProps = {
  url: string;
  fullscreenUrl?: string;
  text?: string;
};
