require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
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
          link: 'https://gatsbyjs.org',
        },
        {
          icon: 'github',
          name: 'github.com/gatsbyjs',
          link: 'https://github.com/gatsbyjs',
        },
        {
          icon: 'twitter',
          name: 'twitter.com/gatsbyjs',
          link: 'https://twitter.com/gatsbyjs',
        },
        {
          icon: null,
          name: 'Terms of Use',
          link: 'https://gatsbyjs.com/terms-of-use',
        },
      ],
    },
  },
  plugins: ['gatsby-plugin-react-helmet'],
  __experimentalThemes: [
    // {
    //   resolve: 'gatsby-theme-showcase',
    //   options: {
    //     basePath: '/entries',
    //   },
    // },
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
