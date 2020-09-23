import * as i from 'types';
import React from 'react';

import { useSelector, useMobile } from 'hooks';
import { Button } from 'common/interaction';

export const DemoButton: React.FC<i.ButtonProps> = ({ children, ...buttonProps }) => {
  const demoUrl = useSelector((state) => state.content.data?.demo_url);
  const isMobile = useMobile();

  return (
    <Button
      bold
      as="a"
      target="_blank"
      href={!isMobile
        ? (demoUrl || '')
        : 'https://gamejolt.com/games/Seek/30152'
      }
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
