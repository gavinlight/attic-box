import * as React from 'react';
import { graphql } from 'gatsby';

import { PageLayout } from 'layouts';
import { Header, World, Gallery, Team, MediaKit } from 'modules/Home';

const Home: React.FC<HomeProps> = ({ data, pageContext }) => {
  const galleryTitle = data.contentfulHomepage?.galleryItems?.find((item) => {
    return pageContext.galleryItemId && pageContext.galleryItemId === item?.id;
  })?.name;

  const memberTitle = data.contentfulHomepage?.teamMembers?.find((item) => {
    return pageContext.memberId && pageContext.memberId === item?.id;
  })?.name;

  const pageData = {
    galleryItems: (data.contentfulHomepage?.galleryItems ||
      []) as GatsbyTypes.GalleryItemFragment[],
    teamMembers: (data.contentfulHomepage?.teamMembers || []) as GatsbyTypes.TeamMemberFragment[],
    title: galleryTitle || memberTitle || 'Home',
  };

  return (
    <PageLayout title={pageData.title} pathname="/">
      <Header />
      <World />
      <Gallery items={pageData.galleryItems} openGalleryItem={pageContext.galleryItemId} />
      <Team members={pageData.teamMembers} openTeamMember={pageContext.memberId} />
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
  }
`;

export default Home;
