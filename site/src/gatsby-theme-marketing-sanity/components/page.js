import React from 'react';
import Helmet from 'react-helmet';
import Illustrations from '../../components/Illustrations';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';

// TODO add Open Graph and Twitter social card metadata
const Page = ({ id, slug, title, description, image, content }) => {
  let baseUrl = '';
  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin;
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {image && <meta name="image" content={image} />}

        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@gatsbyjs" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
      <Illustrations slug={slug} />
      <PortableText blocks={content} />
    </>
  );
};
export default Page;
