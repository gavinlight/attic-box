import React from 'react';
import { createPortal } from 'react-dom';
import { navigate } from 'gatsby';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import CloseIcon from 'images/icon-close.png';
import { isBrowser } from 'services';

import { Background, Close, Content } from './styled';

const modalRoot: HTMLElement | null = isBrowser() ? document.getElementById('modal')! : null;

export const GatsbyModal: React.FC<ModalProps> = ({
  mainUrl, variant = 'card', disableScrollLock, children,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const onCloseModal = () => {
    navigate(
      mainUrl,
      { state: { modal: true } },
    );
  };

  React.useEffect(() => {
    const onCloseModalKeyboard = (event: KeyboardEvent) => {
      if (event.keyCode === 27) onCloseModal();
    };

    window.addEventListener('keyup', onCloseModalKeyboard);
    return () => {
      window.removeEventListener('keyup', onCloseModalKeyboard);
    };
  }, []);

  React.useEffect(() => {
    if (!disableScrollLock) {
      setTimeout(() => {
        disableBodyScroll(modalRef.current as HTMLDivElement);
      }, 0);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [disableScrollLock]);

  return createPortal(
    <div ref={modalRef}>
      <Background onClick={onCloseModal} variant={variant} />
      {variant === 'default' && (
        <Close onClick={onCloseModal} src={CloseIcon} />
      )}
      <Content variant={variant}>{children}</Content>
    </div>,
    // @ts-ignore
    modalRoot,
  );
};

type ModalProps = {
  mainUrl: string;
  variant?: 'default' | 'card';
  disableScrollLock?: boolean;
};
