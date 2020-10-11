import React from 'react';
import { useParams } from 'react-router-dom';

export const useModal = (name: string) => {
  const { contentSlug } = useParams<{ contentSlug?: string }>();
  const slugRef = React.useRef(name.toLowerCase().replace(/ /g, '-').replace(':', ''));
  const [modalOpen, setModalOpen] = React.useState(contentSlug === slugRef.current);

  return {
    slug: slugRef.current,
    open: modalOpen,
    setOpen: setModalOpen,
  };
};
