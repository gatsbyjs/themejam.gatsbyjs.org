import React from 'react';
import Helmet from 'react-helmet';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';
import Hero from '../../components/Hero';
import Callout from '../../components/Callout';
import Footer from '../../components/Footer';

const Page = ({ id, slug, title, description, image, content }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <PortableText blocks={content} />
      <Footer />
    </>
  );
};
export default Page;
