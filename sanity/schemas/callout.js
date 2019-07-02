import React from 'react';

export default {
  title: 'Callout Block',
  name: 'callout',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'calloutContent',
    },
  ],
  preview: {
    component: () => (
      <p style={{ margin: 0, padding: '1rem' }}>
        Callout section — hover for editing controls
      </p>
    ),
  },
};
