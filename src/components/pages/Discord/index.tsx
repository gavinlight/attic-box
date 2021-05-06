import React from 'react';
import { useHistory } from 'react-router-dom';

import DiscordLogoSvg from 'vectors/discord.svg';

import { DiscordPage, RedirectText } from './styled';

const Discord: React.FC = () => {
  const history = useHistory();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      Object.assign(document.createElement('a'), {
        target: '_blank',
        href: 'https://discord.gg/h6TzG3dPnc',
      }).click();

      history.push('/');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <DiscordPage>
      <DiscordLogoSvg />
      <RedirectText>
        Redirecting you to our discord...
      </RedirectText>
    </DiscordPage>
  );
};

export default Discord;
