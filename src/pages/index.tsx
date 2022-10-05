import * as React from 'react';
import { graphql } from 'gatsby';

import { PageLayout } from 'layouts';
import { Header, World, Gallery, Team, MediaKit } from 'modules/Home';

const Home: React.FC<HomeProps> = ({ data, pageContext }) => {
  const pageData = {
    galleryItems: (data.contentfulHomepage?.galleryItems || []) as GatsbyTypes.GalleryItemFragment[],
    teamMembers: (data.contentfulHomepage?.teamMembers || []) as GatsbyTypes.TeamMemberFragment[],
    settings: data.contentfulSettings as GatsbyTypes.SettingsFragment,
  };

  return (
    <PageLayout demoButton={pageData.settings}>
      <Header />
      <World
        demoButton={pageData.settings}
      />
      <Gallery
        items={pageData.galleryItems}
        openGalleryItem={pageContext.galleryItemId}
      />
      <Team
        members={pageData.teamMembers}
        openTeamMember={pageContext.memberId}
      />
      <MediaKit />
    </PageLayout>
  );
};

type HomeProps = {
  data: GatsbyTypes.HomeQuery;
  pageContext: {
    memberId?: string;
    galleryItemId?: string;
  };
};

export const query = graphql`
  query Home {
    contentfulHomepage {
      galleryItems {
        ...GalleryItem
      }
      teamMembers {
        ...TeamMember
      }
    }
    contentfulSettings {
      ...Settings
    }
  }
`;

export default Home;
