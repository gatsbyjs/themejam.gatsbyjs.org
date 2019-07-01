import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Icon = ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 120 },
    {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID,
      dataset: process.env.GATSBY_SANITY_DATASET,
    },
  );

  return (
    <figure sx={{margin: 0}}>
      <Img fluid={fluidProps} alt={node.alt} sx={{height: 36, width: 36}} />
    </figure>
  );
};

export default Icon;