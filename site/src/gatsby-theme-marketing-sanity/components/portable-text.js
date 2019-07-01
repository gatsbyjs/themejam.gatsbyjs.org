import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import serializers from './serializers';

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    projectId={process.env.GATSBY_SANITY_PROJECT_ID}
    dataset={process.env.GATSBY_SANITY_DATASET}
  />
);

export default PortableText;
