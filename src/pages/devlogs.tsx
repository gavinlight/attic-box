import * as React from 'react';
import { graphql } from 'gatsby';

import { PageLayout } from 'layouts';
import { DevlogsHeader, DevlogsList } from 'modules/Devlogs';

const Devlogs: React.FC<DevlogsProps> = ({
  data,
}) => {
  const archiveData = data.contentfulDevlogArchive;
  const mainDevlog = archiveData?.devlogs?.[0];

  return (
    <PageLayout isSubPage>
      {mainDevlog?.hero?.url && (
        <DevlogsHeader
          heroUrl={mainDevlog.hero.url}
          title={archiveData?.title}
          description={archiveData?.description}
        />
      )}
      <DevlogsList
        devlogs={(archiveData?.devlogs || []) as GatsbyTypes.DevlogFragment[]}
      />
    </PageLayout>
  );
};

type DevlogsProps = {
  data: GatsbyTypes.DevlogArchiveQuery;
};

export const query = graphql`
  query DevlogArchive {
    contentfulDevlogArchive {
      title
      description
      devlogs {
        ...Devlog
      }
    }
  }
`;

export default Devlogs;
