import React from 'react';
import { navigate } from 'gatsby';

import { DiscordLayout } from 'layouts';

const Discord: React.FC = () => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('https://discord.gg/h6TzG3dPnc');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <DiscordLayout pathname="/discord" />
  );
};

export default Discord;
