import React from 'react';

import DiscordLogoSvg from 'vectors/discord.svg';

import { DiscordPage, RedirectText } from './styled';

const Discord: React.FC = () => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = 'https://discord.gg/h6TzG3dPnc';
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
