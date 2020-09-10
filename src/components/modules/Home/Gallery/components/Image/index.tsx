import React from 'react';

import { QuoteImage, Modal } from 'common/layout';

import { ImageButton, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({
  url, fullscreenUrl, showFullImage = false, text = 'Seek',
}) => {
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
        openModal={onModalChange(true)}
        closeModal={onModalChange(false)}
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
