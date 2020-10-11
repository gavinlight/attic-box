import React from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useHistory, useParams } from 'react-router-dom';

import CloseIcon from 'images/icon-close.png';

import { Background, Close, Content } from './styled';

export const Modal: React.FC<ModalProps> = ({
  open, url, setModalOpen, children,
}) => {
  const closeModal = () => setModalOpen(false);
  const { contentSlug } = useParams<{ contentSlug?: string }>();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

  React.useEffect(() => {
    const onCloseModalKeyboard = (event: KeyboardEvent) => {
      if (event.keyCode === 27) closeModal();
    };

    window.addEventListener('keyup', onCloseModalKeyboard);
    return () => {
      window.removeEventListener('keyup', onCloseModalKeyboard);
    };
  }, [setModalOpen, history, open, url]);

  React.useEffect(() => {
    if (contentSlug === url) {
      setModalOpen(true);
    }
  }, [contentSlug, url]);

  React.useEffect(() => {
    const shouldChangeUrl = (open && contentSlug !== url) || (!open && contentSlug === url);

    if (shouldChangeUrl) {
      history.push(`/${open ? url : ''}`);
    }
  }, [contentSlug, open, url]);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        disableBodyScroll(modalRef.current as HTMLDivElement);
      }, 0);
    } else {
      clearAllBodyScrollLocks();
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  if (!open) return null;

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
  url: string;
  setModalOpen: (open: boolean) => void;
};
