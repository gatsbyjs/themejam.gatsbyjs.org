import React from 'react';

export default {
  title: 'Arrow',
  name: 'arrow',
  type: 'object',
  fields: [
    {
      name: 'link',
      type: 'string',
    },
  ],
  preview: {
    component: () => <p style={{ margin: 0, padding: '1rem' }}>↓</p>,
  },
};
