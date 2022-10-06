import * as React from 'react';
import { graphql } from 'gatsby';

import { PageLayout } from 'layouts';
import { DevlogsHeader, DevlogsList } from 'modules/Devlogs';

const Devlogs: React.FC<DevlogsProps> = ({
  data,
}) => {
  const archiveData = data.contentfulDevlogArchive;
  const mainDevlog = archiveData?.devlogs?.[0];

  const pageData = {
    devlogs: (archiveData?.devlogs || []) as GatsbyTypes.DevlogFragment[],
    header: {
      hero: mainDevlog?.hero,
      title: archiveData?.title,
      description: archiveData?.description,
    },
  };

  return (
    <PageLayout
      pathname="/devlogs"
      isSubPage
    >
      {pageData.header?.hero && (
        <DevlogsHeader
          hero={pageData.header.hero}
          title={pageData.header.title}
          description={pageData.header.description}
        />
      )}
      <DevlogsList
        devlogs={pageData.devlogs}
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
