require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    basePath: 'https://themejam.gatsbyjs.org',
    title: 'Gatsby Theme Jam',
    description: 'The Gatsby Theme Jam is a... TKTK',
    footer: {
      blurb: `
        Gatsby is a modern website framework that builds performance into every
        website by leveraging the latest web technologies. Create blazing fast,
        compelling apps and websites without needing to become a
        performance expert.
      `,
      links: [
        {
          icon: null,
          name: 'gatsbyjs.org',
          url: 'https://gatsbyjs.org',
        },
        {
          icon: 'github',
          name: 'github.com/gatsbyjs',
          url: 'https://github.com/gatsbyjs',
        },
        {
          icon: 'twitter',
          name: 'twitter.com/gatsbyjs',
          url: 'https://twitter.com/gatsbyjs',
        },
        {
          icon: null,
          name: 'Terms of Use',
          url: 'https://gatsbyjs.com/terms-of-use',
        },
      ],
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    // {
    //   resolve: 'gatsby-theme-showcase',
    //   options: {
    //     basePath: '/entries',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-7`,
      },
    },
    {
      resolve: 'gatsby-theme-marketing-sanity',
      options: {
        sanity: {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
          token: process.env.GATSBY_SANITY_TOKEN,
          overlayDrafts: !isProduction,
          watchMode: !isProduction,
        },
      },
    },
  ],
};
