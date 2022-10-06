/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const tsJson = require('./tsconfig.json');

const activeEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

console.log(`NOTE: Using environment config: '${activeEnv}'`);

module.exports = {
  siteMetadata: {
    title: 'Seek: Light Through Darkness',
    titleTemplate: '%s - Seek - Attic Box Games',
    description: 'Seek: Light Through Darkness - Promotional website',
    image: 'icons/icon-512x512.png',
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Seek: Light Through Darkness',
        short_name: 'Seek',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#96281B',
        display: 'standalone',
        icon: 'src/static/images/logo-abg.png',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.GATSBY_CONTENTFUL_ENV,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static/vectors/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: tsJson.compilerOptions.baseUrl,
        aliases: Object.entries(tsJson.compilerOptions.paths).reduce(
          (aliases, entry) => {
            const [key, value] = entry;
            const path = value[0];

            if (path.includes('index')) {
              return aliases;
            }

            const newKey = key.replace('/*', '');
            const newPath = `./${path.replace('/*', '')}`;

            aliases[newKey] = newPath;

            return aliases;
          },
          {},
        ),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/static/vectors/`,
        },
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        mode: 'async',
        preconnect: ['https://fonts.gstatic.com'],
        web: [
          {
            name: 'Crimson Text',
            file: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        dataLayerName: 'dataLayer',
        includeInDevelopment: false,
      },
    },
  ],
};
