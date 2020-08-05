import React from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import CloseIcon from 'images/icon-close.png';

import { Background, Close, Content } from './styled';

export const Modal: React.FC<ModalProps> = ({ open, closeModal, children }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onCloseModal = (event: KeyboardEvent) => {
      if (event.keyCode === 27) closeModal();
    };

    if (modalRef.current) disableBodyScroll(modalRef.current);
    window.addEventListener('keyup', onCloseModal);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keyup', onCloseModal);
    };
  }, [closeModal, open]);

  return createPortal(
    <div ref={modalRef}>
      <Background onClick={closeModal} />
      <Close onClick={closeModal} src={CloseIcon} />
      <Content>{children}</Content>
    </div>,
    // @ts-ignore
    document.getElementById('modal'),
  );
};

type ModalProps = {
  open: boolean;
  closeModal: () => void;
};
