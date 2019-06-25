require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-showcase',
      options: {
        basePath: '/entries',
      },
    },
    {
      resolve: 'gatsby-theme-marketing-sanity',
      options: {
        sanity: {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
          overlayDrafts: !isProduction,
          watchMode: !isProduction,
        },
      },
    },
  ],
};
