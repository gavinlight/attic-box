import * as i from 'types';
import React from 'react';
import axios from 'axios';

import { useData, useMobile } from 'hooks';
import { Button } from 'common/interaction';

export const DemoButton: React.FC<i.ButtonProps> = ({ children, ...buttonProps }) => {
  const isMobile = useMobile();
  const { data: demoUrl } = useData<i.ContentType, string>(
    () => axios.get<i.ContentType>(
      'https://seek-the-game.firebaseio.com/content.json'
    ).then((response) => response.data),
    {
      fetchOnLoad: true,
      transformFunction: (content) => content?.demo_url || '',
    },
  );

  return (
    <Button
      bold
      as="a"
      target="_blank"
      href={!isMobile
        ? demoUrl
        : 'https://gamejolt.com/games/Seek/30152'
      }
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
