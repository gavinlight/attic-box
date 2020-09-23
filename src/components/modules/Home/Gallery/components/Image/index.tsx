import React from 'react';
import { useParams } from 'react-router-dom';

import { QuoteImage, Modal } from 'common/layout';

import { ImageButton, ModalImage, ModalText } from './styled';

export const Image: React.FC<ImageProps> = ({
  url, fullscreenUrl, showFullImage = false, text = 'Seek',
}) => {
  const { contentSlug } = useParams<{ contentSlug?: string }>();
  const urlRef = React.useRef(
    text.toLowerCase().replace(/ /g, '-').replace(':', ''),
  );

  const [modalOpen, setModalOpen] = React.useState(contentSlug === urlRef.current);
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
