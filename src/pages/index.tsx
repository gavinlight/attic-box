import * as React from 'react';
import { graphql } from 'gatsby';

import { Header, World, Gallery, Team, MediaKit } from 'modules/Home';
import { Page } from 'common/layout';

const Home: React.FC<HomeProps> = ({ data, pageContext }) => {
  const pageData = {
    galleryItems: (data.contentfulHomepage?.galleryItems || []) as GatsbyTypes.GalleryItemFragment[],
    teamMembers: (data.contentfulHomepage?.teamMembers || []) as GatsbyTypes.TeamMemberFragment[],
  };

  return (
    <Page>
      <Header />
      <World />
      <Gallery
        items={pageData.galleryItems}
        openGalleryItem={pageContext.galleryItemId}
      />
      <Team
        members={pageData.teamMembers}
        openTeamMember={pageContext.memberId}
      />
      <MediaKit />
    </Page>
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
  }
`;

export default Home;
