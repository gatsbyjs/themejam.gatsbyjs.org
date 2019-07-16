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
    {
      name: 'variant',
      type: 'string',
      options: {
        list: [
          { title: 'Purple', value: 'purple', default: true },
          { title: 'Blue', value: 'blue' },
          { title: 'Yellow', value: 'yellow' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: string => string.required(),
    },
    {
      name: 'direction',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left', default: true },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: string => string.required(),
    },
    {
      name: 'anchor',
      type: 'string',
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
