import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Meta: React.FC<MetaProps> = ({ title, pathname }) => {
  const data = useStaticQuery<GatsbyTypes.MetaQuery>(query);
  const internalMetadata = data.site?.siteMetadata;

  const seo = {
    title: title || internalMetadata?.title,
    description: internalMetadata?.description,
    image: `${internalMetadata?.siteUrl}/${internalMetadata?.image}`,
    url: `${internalMetadata?.siteUrl}${pathname}`,
    titleTemplate: internalMetadata?.titleTemplate,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={seo.titleTemplate} htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:alt" content={seo.title} />
      </Helmet>
    </>
  );
};

type MetaProps = {
  title?: string;
  pathname: string;
};

const query = graphql`
  query Meta {
    site {
      siteMetadata {
        titleTemplate
        title
        siteUrl
        image
        description
      }
    }
  }
`;
