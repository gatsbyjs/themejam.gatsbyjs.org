export default {
  title: 'Rule Icon',
  name: 'rule-icon',
  type: 'image',
  fields: [
    {
      type: 'string',
      name: 'alt',
      title: 'Alt text',
      description:
        'Add a description of the image content for the visually impaired.',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
