import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

// this wouldn't need to be shadowed if we add a prop to the Figure at the theme level
const Figure = ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 340 },
    {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID,
      dataset: process.env.GATSBY_SANITY_DATASET,
    },
  );

  return (
    <figure>
      <Img loading={'eager'} fluid={fluidProps} alt={node.alt} />
    </figure>
  );
};

export default Figure;
