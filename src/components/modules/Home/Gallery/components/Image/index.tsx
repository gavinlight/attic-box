import React from 'react';
import styled from 'styled-components';

import { QuoteImage, Modal } from 'common/layout';

const ImageButton = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const Image: React.FC<ImageProps> = ({ url, text }) => {
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
          <QuoteImage
            src={url}
            text={text || ''}
            big
          />
        </Modal>
      )}
    </>
  );
};

type ImageProps = {
  url: string;
  text?: string;
};
