import React, { Fragment } from 'react';
import Hero from '../../components/Hero';
import Callout from '../../components/Callout';
const Page = ({ id, slug, title, description, image, content }) => {
  return (
    <Fragment>
      <Hero />
      <Callout />
    </Fragment>
  );
};
export default Page;
