import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';

export const useModal = (name: string) => {
  // const history = useHistory();
  // const { contentSlug } = useParams<{ contentSlug?: string }>();
  const contentSlug = 'lol';
  const slugRef = React.useRef(name.toLowerCase().replace(/ /g, '-').replace(':', ''));
  const [modalOpen, setModalOpen] = React.useState(contentSlug === slugRef.current);

  React.useEffect(() => {
    if (!modalOpen && slugRef.current === contentSlug) {
      setModalOpen(true);
    } else if (modalOpen && slugRef.current !== contentSlug) {
      setModalOpen(false);
    }
  }, [contentSlug, modalOpen]);

  const onModalChange = (open: boolean) => {
    if (open !== modalOpen) {
      // history.push(`/${open ? slugRef.current : ''}`);
    }
  };

  return {
    slug: slugRef.current,
    open: modalOpen,
    setOpen: onModalChange,
  };
};
