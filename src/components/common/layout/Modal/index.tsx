import React from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useHistory, useParams } from 'react-router-dom';

import { useIsMounted, usePrevious } from 'hooks';
import CloseIcon from 'images/icon-close.png';

import { Background, Close, Content } from './styled';

export const Modal: React.FC<ModalProps> = ({ open, url, openModal, closeModal, children }) => {
  const { contentSlug } = useParams<{ contentSlug?: string }>();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();
  const isMountedRef = useIsMounted();
  const previousOpen = usePrevious(open);

  const onCloseModal = React.useCallback(() => {
    history.push('/');
    clearAllBodyScrollLocks();
    closeModal();
  }, [closeModal, history]);

  React.useEffect(() => {
    if (modalRef.current) {
      setTimeout(() => disableBodyScroll(modalRef.current as HTMLDivElement), 0);
    }

    const onCloseModalKeyboard = (event: KeyboardEvent) => {
      if (event.keyCode === 27) onCloseModal();
    };
    window.addEventListener('keyup', onCloseModalKeyboard);

    const onCloseModalBackbutton = (event: HashChangeEvent) => {
      const { newURL, oldURL } = event;

      if (open && newURL !== oldURL && oldURL.includes(url)) {
        onCloseModal();
      }
    };
    window.addEventListener('hashchange', onCloseModalBackbutton);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keyup', onCloseModalKeyboard);
      window.removeEventListener('hashchange', onCloseModalBackbutton);
    };
  }, [closeModal, history, onCloseModal, open, url]);

  React.useEffect(() => {
    if (contentSlug === url) {
      openModal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentSlug]);

  // React.useEffect(() => {
  //   if (!isMountedRef.current) return;
  //   console.log('open, previousOpen', open, previousOpen);
  //   history.push(`/${open ? url : ''}`);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [history, open, url]);

  if (!open) return null;

  return createPortal(
    <div ref={modalRef}>
      <Background onClick={closeModal} />
      <Close onClick={onCloseModal} src={CloseIcon} />
      <Content>{children}</Content>
    </div>,
    // @ts-ignore
    document.getElementById('modal'),
  );
};

type ModalProps = {
  open: boolean;
  url: string;
  openModal: () => void;
  closeModal: () => void;
};
