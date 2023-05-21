import React from 'react';
import { graphql, navigate } from 'gatsby';

import { DiscordLayout } from 'layouts';

const Discord: React.FC<DiscordProps> = ({ data }) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (data.contentfulSettings?.discordUrl) {
        navigate(data.contentfulSettings.discordUrl);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <DiscordLayout title="Discord" pathname="/discord" />;
};

type DiscordProps = {
  data: GatsbyTypes.DiscordQuery;
};

export const query = graphql`
  query Discord {
    contentfulSettings {
      discordUrl
    }
  }
`;

export default Discord;
