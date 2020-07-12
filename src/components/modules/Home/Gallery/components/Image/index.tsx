import React from 'react';
import styled from 'styled-components';

import { QuoteImage, Modal } from 'common/layout';

const ImageButton = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const ModalContent = styled.div`
  margin-top: -40px;

  & p {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

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
          <ModalContent>
            <QuoteImage
              src={fullscreenUrl || url}
              text={text || ''}
              big
            />
          </ModalContent>
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
