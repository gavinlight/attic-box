import React from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useHistory } from 'react-router-dom';

import { useIsMounted } from 'hooks';
import CloseIcon from 'images/icon-close.png';

import { Background, Close, Content } from './styled';

export const Modal: React.FC<ModalProps> = ({ open, url, closeModal, children }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();
  const isMountedRef = useIsMounted();

  React.useEffect(() => {
    if (modalRef.current) {
      setTimeout(() => disableBodyScroll(modalRef.current as HTMLDivElement), 0);
    }

    const onCloseModalKeyboard = (event: KeyboardEvent) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keyup', onCloseModalKeyboard);

    const onCloseModalBackbutton = (event: HashChangeEvent) => {
      const { newURL, oldURL } = event;

      if (open && newURL !== oldURL && oldURL.includes(url)) {
        closeModal();
      }
    };
    window.addEventListener('hashchange', onCloseModalBackbutton);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keyup', onCloseModalKeyboard);
      window.removeEventListener('hashchange', onCloseModalBackbutton);
    };
  }, [closeModal, history, open, url]);

  React.useEffect(() => {
    if (!isMountedRef.current) return;
    history.push(`/${open ? url : ''}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, open, url]);

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
  closeModal: () => void;
};
