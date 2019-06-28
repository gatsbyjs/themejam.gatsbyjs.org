import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
const Page = ({ id, slug, title, description, image, content }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Hero
        headline="Announcing Gatsby Theme Jam!"
        subHeadline="Build a Gatsby theme and win exclusive swag and prizes"
        subDescription="To celebrate the launch of Gatsby themes, we’re holding a theme
        building contest! Remix our blog theme and enter the Theme Jam contest
        to get exclusive swag designed by Maggie Appleton. The top two entries
        will win an all-expenses-paid trip to Gatsby Days!"
      />
      <Footer />
    </>
  );
};
export default Page;
