export default {
  title: 'Callout Block',
  name: 'callout',
  type: 'object',
  fields: [
    {
      title: 'Callout Section',
      name: 'calloutContent',
      type: 'array',
      of: [
        { type: 'block' },
        {
          title: 'Code Block',
          name: 'codeBlock',
          type: 'code',
        },
      ],
    },
  ],
};
