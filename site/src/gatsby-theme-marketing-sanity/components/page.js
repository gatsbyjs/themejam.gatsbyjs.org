import React from 'react';
import Helmet from 'react-helmet';
import Illustrations from '../../components/Illustrations';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';
import Footer from '../../components/Footer';

// TODO add Open Graph and Twitter social card metadata
const Page = ({ id, slug, title, description, image, content }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Illustrations slug={slug} />
      <PortableText blocks={content} />
      <Footer />
    </>
  );
};
export default Page;
