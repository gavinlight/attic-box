import * as i from 'types';
import React from 'react';

import { useMobile } from 'hooks';
import { Button } from 'common/interaction';

export const DemoButton: React.FC<DemoButtonProps> = ({
  demoUrl,
  gamejoltUrl,
  children,
  ...buttonProps
}) => {
  const isMobile = useMobile();

  return (
    <Button
      bold
      as="a"
      target="_blank"
      href={!isMobile
        ? demoUrl
        : gamejoltUrl
      }
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

type DemoButtonProps = i.ButtonProps & {
  demoUrl: string;
  gamejoltUrl: string;
};
