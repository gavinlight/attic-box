import React from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useHistory } from 'react-router-dom';

import CloseIcon from 'images/icon-close.png';

import { Background, Close, Content } from './styled';

export const Modal: React.FC<ModalProps> = ({
  open, url, setModalOpen, variant = 'card', disableScrollLock, children,
}) => {
  const closeModal = () => setModalOpen(false);
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
    if (open) {
      if (!disableScrollLock) {
        setTimeout(() => {
          disableBodyScroll(modalRef.current as HTMLDivElement);
        }, 0);
      }
    } else {
      clearAllBodyScrollLocks();
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open, disableScrollLock]);

  if (!open) return null;

  return createPortal(
    <div ref={modalRef}>
      <Background onClick={closeModal} variant={variant} />
      {variant === 'default' && (
        <Close onClick={closeModal} src={CloseIcon} />
      )}
      <Content variant={variant}>{children}</Content>
    </div>,
    // @ts-ignore
    document.getElementById('modal'),
  );
};

type ModalProps = {
  open: boolean;
  url: string;
  setModalOpen: (open: boolean) => void;
  variant?: 'default' | 'card';
  disableScrollLock?: boolean;
};
