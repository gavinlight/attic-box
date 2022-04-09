import * as React from 'react';
import { graphql } from 'gatsby';

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    null
  );
};

type HomeProps = {
  data: GatsbyTypes.HomeQuery;
};

export const query = graphql`
  query Home {
    contentfulHomepage {
      galleryItems {
        type
      }
    }
  }
`;

export default Home;
