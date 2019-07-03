import React from 'react';
import Helmet from 'react-helmet';
import Illustrations from '../../components/Illustrations';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';
import Footer from '../../components/Footer';

const Page = ({ slug, title, description, image, content }) => {
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
        <html lang="en-US" />
        <link href="https://cdn.sanity.io/" rel="preconnect" crossorigin />
        <link
          rel="preload"
          href="/static/ftn65-webfont-0ddc10d20bd3c3e162e4ea9b49c82856.woff2"
          as="font"
        />
        <link
          rel="preload"
          href="/static/ftn45-webfont-c2439033a37a428d148b673062131f47.woff2"
          as="font"
        />
      </Helmet>
      <PortableText blocks={content} />
      <Illustrations slug={slug} />
      <Footer />
    </>
  );
};
export default Page;
